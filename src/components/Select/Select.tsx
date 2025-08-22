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
  value: string;
  onChange: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const { options, onChange, view = "big", value } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<ColorStatus>();
  const containerRef = useRef<HTMLDivElement>(null);
  console.log(onChange);

  useEffect(() => {
    if (view === "small") {
      const status = options?.find((el) => el.content === value)?.status;
      if (status) {
        setStatus(status);
      }
    }
  }, [status, view, options, value]);

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
      if (view === "big" && option.content === value) return;
      return (
        <div id={option.id} key={option.id} className="option">
          {option.content}
          <Status status={option.status} />
        </div>
      );
    });
  }, [options, view, value]);

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
          {value && <div key={value}>{value}</div>}
          <Status status={status} />
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
