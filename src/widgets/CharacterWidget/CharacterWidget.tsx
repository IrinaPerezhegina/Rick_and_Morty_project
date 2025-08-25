import { memo, useMemo } from "react";
import { Link } from "react-router";

import { Input } from "../../components/Input/Input";
import { Select, type SelectOption } from "../../components/Select/Select";
import { CircleStatus } from "../../components/Status/Status";
import { classNames } from "../../lib/classNames";
import { ButtonsGroup } from "./components/ButtonsGroup/ButtonsGroup";

import "./CharacterWidget.css";

const optionsStatus: SelectOption[] = [
  { id: "status-1", content: "Alive" },
  { id: "status-2", content: "Dead" },
  { id: "status-3", content: "Unknown" },
];

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  image: string;
}

export interface CharacterWidgetProps {
  classname?: string;
  readOnly: boolean;
  character: Character;
  onClick: () => void;
}

export const CharacterWidget = memo((props: CharacterWidgetProps) => {
  const { classname, readOnly = false, character, onClick } = props;

  const statusCharacter = useMemo(() => {
    return optionsStatus.find((el) => el.content === character.status);
  }, [character.status]);

  return (
    <div className={classNames("CharacterCard", [classname])}>
      <div className="buttonGroup">
        <ButtonsGroup readonly={readOnly} onClick={onClick} />
      </div>
      <img src={character.image} className="image" />
      <div className="description">
        <div className="name">
          {readOnly ? (
            <Link to={`character/${character.id}`}>{character.name}</Link>
          ) : (
            <Input
              readonly={readOnly}
              view="form"
              value={character.name}
              size="big"
            />
          )}
        </div>
        <div className="gender">
          <p>Gender</p>
          <span>{character.gender}</span>
        </div>
        <div className="species">
          <p>Species</p>
          <span>{character.species}</span>
        </div>
        <div className="location">
          <p>Location</p>
          <Input
            readonly={readOnly}
            view="form"
            value={character.location.name}
            size="small"
          />
        </div>
        <div className="status">
          <p>Status</p>
          <div className="status_wrapper">
            {readOnly ? (
              <>
                <span>{character.status}</span>
                <CircleStatus status={statusCharacter?.content} />
              </>
            ) : (
              <Select
                Svg={CircleStatus}
                onChange={() => {}}
                view="small"
                value={character.status}
                options={optionsStatus}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
