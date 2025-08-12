import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Arrow } from "../Arrow/Arrow";
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

  // Обработка выбора опции
  const handleOptionClick = useCallback(
    (option: SelectOption) => {
      setSelectedOption(option);
      if (onChange) onChange(option);
      setIsOpen(false);
    },
    [onChange]
  );
  const optionsList = useMemo(() => {
    let optionsFilter = options;
    if (view === "big") {
      optionsFilter = options?.filter(
        (option) => option.id !== selectedOption?.id
      );
    }

    return optionsFilter?.map((option) => (
      <div
        key={option.id}
        className={`${view}Option`}
        onClick={() => handleOptionClick(option)}
      >
        {option.content}
        <div className={option.status} />
      </div>
    ));
  }, [options, handleOptionClick, selectedOption, view]);

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
    <div className={`${view}Wrapper`} ref={containerRef}>
      <div className={`${view}Header`} onClick={toggleOpen}>
        <div className={`${view}HeaderWrapper`}>
          {selectedOption && (
            <div key={selectedOption.id}>{selectedOption.content}</div>
          )}
          {selectedOption?.status && <Arrow status={selectedOption?.status} />}
        </div>
        {isOpen ? (
          <img
            src="/src/assets/arrowDown.svg"
            alt="arrow down"
            className={`${view}Arrow`}
          />
        ) : (
          <img
            src="/src/assets/arrowUp.svg"
            alt="arrow up"
            className={`${view}Arrow`}
          />
        )}
      </div>
      {isOpen && <div className={`${view}OptionsContainer`}>{optionsList}</div>}
    </div>
  );
});
