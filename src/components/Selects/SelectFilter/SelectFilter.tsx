import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./SelectFilter.css";

export interface SelectOption {
  id: string;
  content: string;
}

interface SelectProps {
  options?: SelectOption[];
  value?: string;
  onChange?: (value: SelectOption) => void;
}

export const SelectFilter = memo((props: SelectProps) => {
  const { options, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  //   Обработка выбора опции
  const handleOptionClick = useCallback(
    (option: SelectOption) => {
      setSelectedOption(option);
      if (onChange) onChange(option);
      setIsOpen(false);
    },
    [onChange]
  );
  const optionsList = useMemo(() => {
    const optionsFilter = options?.filter(
      (option) => option.id !== selectedOption?.id
    );
    return optionsFilter?.map((option) => (
      <div
        key={option.id}
        className="option"
        onClick={() => handleOptionClick(option)}
      >
        {option.content}
      </div>
    ));
  }, [options, handleOptionClick, selectedOption]);

  //   Закрывать список при клике вне компонента
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
    <div className="wrapper" ref={containerRef}>
      <div className="header" onClick={toggleOpen}>
        {selectedOption && (
          <div key={selectedOption.id}>{selectedOption.content}</div>
        )}
        {isOpen ? (
          <img
            src="/src/assets/arrowDown.svg"
            alt="arrow"
            className="arrow down"
          />
        ) : (
          <img src="/src/assets/arrowUp.svg" alt="arrow" className="arrow up" />
        )}
      </div>
      {isOpen && <div className="optionsContainer">{optionsList}</div>}
    </div>
  );
});
