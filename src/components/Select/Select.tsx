import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ReactComponent as ArrowDown } from "@/assets/arrowDown.svg";
import { ReactComponent as ArrowUp } from "@/assets/arrowUp.svg";

import { classNames } from "@/lib/helper";

import "./Select.css";

export interface SelectOption {
  id: string;
  content: string;
}

export interface SelectOptionContentProps {
  value: string;
}

export const DefaultSelectOptionContent = (props: SelectOptionContentProps) => {
  return <>{props.value}</>;
};

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  view: "big" | "small";
  options?: SelectOption[];
  placeholder?: string;
  SelectOptionContentComponent?: React.FC<SelectOptionContentProps>;
}

export const Select = memo((props: SelectProps) => {
  const {
    placeholder = "",
    options,
    onChange,
    value,
    view = "big",
    SelectOptionContentComponent = DefaultSelectOptionContent,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Закрывать список при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as HTMLDivElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Обработчик клика по компоненту списка выбора селекта
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = e.target as HTMLDivElement;
      const selected = options?.find((el) => el.id === target.id);

      if (selected) {
        if (onChange) {
          onChange(selected.content);
        }
        setIsOpen(false);
      }
    },
    [options, onChange]
  );

  const optionsList = useMemo(() => {
    return options?.map((option) => {
      if (option.content === value) {
        return;
      }

      return (
        <div id={option.id} key={option.id} className="option">
          <SelectOptionContentComponent value={option.content} />
        </div>
      );
    });
  }, [options, value, SelectOptionContentComponent]);

  return (
    <div
      ref={containerRef}
      className={classNames("wrapper", {
        wrapper_big: view === "big",
        wrapper_small: view === "small",
      })}
    >
      <div className="header" onClick={toggleOpen}>
        <div className="headerWrapper">
          {value ? <SelectOptionContentComponent value={value} /> : placeholder}
        </div>

        {isOpen ? (
          <ArrowDown className="arrow" />
        ) : (
          <ArrowUp className="arrow" />
        )}
      </div>

      {isOpen && (
        <div onClick={handleClick} className="optionsContainer">
          {optionsList}
        </div>
      )}
    </div>
  );
});
