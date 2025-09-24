import { memo } from 'react';
import { Link } from 'react-router';

import {
  Character,
  CircleStatus,
  EditCharacterProps,
  Input,
  Select,
  checkingStatus,
  classNames,
  optionsStatus,
  useEditingCharacter
} from '@/shared';

import { ButtonsGroup } from '../components';

import './CharacterWidget.css';

export interface CharacterWidgetProps {
  character: Character;
  onEditCharacter: (value: EditCharacterProps) => void;
  className?: string;
}

export const CharacterWidget = memo((props: CharacterWidgetProps) => {
  const { className, character, onEditCharacter } = props;
  const {
    statusCharacter,
    readOnly,
    name,
    location,
    status,
    nameError,
    onEditCharacterCard,
    updateStatusCharacterCard,
    updateLocationCharacterCard,
    updateNameCharacterCard,
    enableEditingMode,
    onCancelEditMode
  } = useEditingCharacter({ character, onEditCharacter });

  return (
    <div className={classNames('character-card', className)}>
      <div className='character-card__btns'>
        <ButtonsGroup
          onChange={onEditCharacterCard}
          onEdit={enableEditingMode}
          onCancel={onCancelEditMode}
          readonly={readOnly}
        />
      </div>
      <img
        src={character.image}
        className='character-card__image'
      />
      <div className='character-card__description'>
        <div className='character-card__description-name'>
          {readOnly ? (
            <Link to={`characters/${character.id}`}>{character.name}</Link>
          ) : (
            <>
              <Input
                onChange={updateNameCharacterCard}
                name='name'
                readonly={readOnly}
                view='form'
                value={name}
                size='big'
              />
              <span className='character-card__description-error'>
                {nameError}
              </span>
            </>
          )}
        </div>
        <div className='character-card__description-gender'>
          <p>Gender</p>
          <span>{character.gender}</span>
        </div>

        <div className='character-card__description-species'>
          <p>Species</p>
          <span>{character.species}</span>
        </div>

        <div className='character-card__description-location'>
          <p>Location</p>
          <Input
            onChange={updateLocationCharacterCard}
            name='location'
            readonly={readOnly}
            view='form'
            value={location}
            size='small'
          />
        </div>

        <div className='character-card__description-status'>
          <p>Status</p>
          <div className='character-card__description-status--wrapper'>
            {readOnly ? (
              <>
                <span>{character.status}</span>
                <CircleStatus
                  status={checkingStatus(statusCharacter?.content)}
                />
              </>
            ) : (
              <Select
                onChange={updateStatusCharacterCard}
                view='small'
                value={status}
                options={optionsStatus}
                SelectOptionContentComponent={(props) => (
                  <>
                    {props.value}

                    <CircleStatus status={checkingStatus(props.value)} />
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
