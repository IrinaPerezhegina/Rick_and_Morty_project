import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";
import { ReactComponent as ArrowUp } from "../../assets/arrowUp.svg";

import { classNames } from "../../lib/classNames";
import { Status } from "../Status/Status";
import "./Select.css";

export type ColorStatus = "red" | "green" | "orange";

export interface SelectOption {
  id: string;
  content: string;
  status?: ColorStatus;
}

interface SelectProps {
  view: "big" | "small";
  options?: SelectOption[];
  value?: string;
  onChange?: (value: SelectOption) => void;
}

export const Select = memo((props: SelectProps) => {
  const { options, onChange, view = "big" } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Обработчик клика по компоненту списка выбора селекта
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = e.target as HTMLDivElement;
      const selected = options?.find((el) => el.id === target.id);

      if (selected) {
        setSelectedOption(selected);
        if (onChange) {
          onChange(selected);
        }
        setIsOpen(false);
      }
    },
    [options, onChange]
  );

  const optionsList = useMemo(() => {
    return options?.map((option) => {
      if (view === "big" && option.id === selectedOption?.id) return;
      return (
        <div id={option.id} key={option.id} className="option">
          {option.content}
          <Status status={option.status} />
        </div>
      );
    });
  }, [options, selectedOption, view]);

  // Закрывать список при клике вне компонента
  useEffect(() => {
    if (options) {
      setSelectedOption(options[0]);
    }
  }, [options]);

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

  return (
    <div
      className={classNames("wrapper", {
        wrapper_big: view === "big",
        wrapper_small: view === "small",
      })}
      ref={containerRef}
    >
      <div className="header" onClick={toggleOpen}>
        <div className="headerWrapper">
          {selectedOption && (
            <div key={selectedOption.id}>{selectedOption.content}</div>
          )}
          <Status status={selectedOption?.status} />
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
