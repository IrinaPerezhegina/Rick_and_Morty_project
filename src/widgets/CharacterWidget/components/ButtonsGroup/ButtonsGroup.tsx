import { memo } from "react";
import "./ButtonsGroup.css";
import { ReactComponent as CheckIcon } from "/src/assets/checkMark.svg";
import { ReactComponent as CloseIcon } from "/src/assets/close.svg";
import { ReactComponent as PensilIcon } from "/src/assets/pensil.svg";

export interface ButtonsGroupProps {
  readonly: boolean;
  onClick: () => void;
}

export const ButtonsGroup = memo((props: ButtonsGroupProps) => {
  const { readonly, onClick } = props;

  return (
    <div className="ButtonGroup">
      <button>
        <CloseIcon className="close" />
      </button>

      {readonly ? (
        <button onClick={onClick}>
          <PensilIcon className="pensil" />
        </button>
      ) : (
        <button onClick={onClick}>
          <CheckIcon className="check" />
        </button>
      )}
    </div>
  );
});
