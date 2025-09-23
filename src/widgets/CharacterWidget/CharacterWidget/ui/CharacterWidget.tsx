import { memo, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router';

import {
  Character,
  CircleStatus,
  Input,
  Select,
  StatusesType,
  classNames,
  optionsStatus
} from '@/shared';

import { ButtonsGroup } from '../../components';

import './CharacterWidget.css';

interface EditCharacterProps {
  name: string;
  id: number;
  location: string;
  status: string;
}

export interface CharacterWidgetProps {
  character: Character;
  onEditCharacter: (value: EditCharacterProps) => void;
  classname?: string;
}

export const CharacterWidget = memo((props: CharacterWidgetProps) => {
  const { classname, character, onEditCharacter } = props;
  const [readOnly, setReadOnly] = useState(true);

  const [characterState, setCharacterState] = useState({
    name: character.name,
    location: character.location.name,
    status: character.status
  });
  console.log(character);

  const enableEditingMode = useCallback(() => {
    setReadOnly(false);
  }, []);

  const onCancelEditMode = useCallback(() => {
    setCharacterState({
      name: character.name,
      location: character.location.name,
      status: character.status
    });
    setReadOnly((prev) => !prev);
  }, [character.name, character.location, character.status]);

  const updateNameCharacterCard = useCallback((value: string) => {
    setCharacterState((prev) => ({
      ...prev,
      name: value
    }));
  }, []);

  const updateLocationCharacterCard = useCallback((value: string) => {
    setCharacterState((prev) => ({
      ...prev,
      location: value
    }));
  }, []);

  const updateStatusCharacterCard = useCallback((value: string) => {
    setCharacterState((prev) => ({
      ...prev,
      status: value
    }));
  }, []);

  const onEditCharacterCard = useCallback(() => {
    onEditCharacter({ id: character.id, ...characterState });
    setReadOnly(true);
  }, [character.id, characterState, onEditCharacter]);

  const statusCharacter = useMemo(() => {
    return optionsStatus.find((el) => el.content === character.status);
  }, [character.status]);

  return (
    <div className={classNames('CharacterCard', classname)}>
      <div className='buttonGroup'>
        <ButtonsGroup
          onChange={onEditCharacterCard}
          onEdit={enableEditingMode}
          onCancel={onCancelEditMode}
          readonly={readOnly}
        />
      </div>
      <img
        src={character.image}
        className='image'
      />
      <div className='description'>
        <div className='name'>
          {readOnly ? (
            <Link to={`characters/${character.id}`}>{character.name}</Link>
          ) : (
            <Input
              onChange={updateNameCharacterCard}
              name='name'
              readonly={readOnly}
              view='form'
              value={characterState.name}
              size='big'
            />
          )}
        </div>
        <div className='gender'>
          <p>Gender</p>
          <span>{character.gender}</span>
        </div>

        <div className='species'>
          <p>Species</p>
          <span>{character.species}</span>
        </div>

        <div className='location'>
          <p>Location</p>
          <Input
            onChange={updateLocationCharacterCard}
            name='location'
            readonly={readOnly}
            view='form'
            value={characterState.location}
            size='small'
          />
        </div>

        <div className='status'>
          <p>Status</p>
          <div className='status_wrapper'>
            {readOnly ? (
              <>
                <span>{character.status}</span>
                <CircleStatus
                  status={statusCharacter?.content as StatusesType}
                />
              </>
            ) : (
              <Select
                onChange={updateStatusCharacterCard}
                view='small'
                value={characterState.status}
                options={optionsStatus}
                SelectOptionContentComponent={(props) => (
                  <>
                    {props.value}

                    <CircleStatus status={props.value as StatusesType} />
                  </>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
