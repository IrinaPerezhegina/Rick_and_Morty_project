import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./SelectCard.css";

type ColorStatus = "red" | "green" | "orange";

export interface SelectOption {
  id: string;
  content: string;
  status: ColorStatus;
}

interface SelectProps {
  options?: SelectOption[];
  value?: string;
  onChange?: (value: SelectOption) => void;
}

export const SelectCard = memo((props: SelectProps) => {
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
    return options?.map((option) => (
      <div
        key={option.id}
        className="optionCard"
        onClick={() => handleOptionClick(option)}
      >
        <div> {option.content} </div>
        <div className={option.status} />
      </div>
    ));
  }, [options, handleOptionClick]);

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
    <div className="wrapperCard" ref={containerRef}>
      <div className="headerCard" onClick={toggleOpen}>
        <div className="selectedOptionWrapper">
          {selectedOption && (
            <div key={selectedOption.id}>{selectedOption.content} </div>
          )}
          <div className={selectedOption?.status} />
        </div>
        {isOpen ? (
          <img
            src="/src/assets/arrowDown.svg"
            alt="arrow down"
            className="arrowCard"
          />
        ) : (
          <img
            src="/src/assets/arrowUp.svg"
            alt="arrow up"
            className="arrowCard"
          />
        )}
      </div>
      {isOpen && <div className="optionsContainerCard">{optionsList}</div>}
    </div>
  );
});
