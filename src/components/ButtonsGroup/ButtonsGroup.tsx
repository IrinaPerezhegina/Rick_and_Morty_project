import { memo } from "react";
import { ReactComponent as CheckIcon } from "../../assets/checkMark.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as PensilIcon } from "../../assets/pensil.svg";
import "./ButtonsGroup.css";

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
