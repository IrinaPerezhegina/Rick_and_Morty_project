import { memo, useMemo } from 'react';
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

export interface CharacterWidgetProps {
  character: Character;
  readOnly?: boolean;
  onClick?: () => void;
  classname?: string;
}

export const CharacterWidget = memo((props: CharacterWidgetProps) => {
  const { classname, character, onClick = () => {}, readOnly = true } = props;

  const statusCharacter = useMemo(() => {
    return optionsStatus.find((el) => el.content === character.status);
  }, [character.status]);

  return (
    <div className={classNames('CharacterCard', classname)}>
      <div className='buttonGroup'>
        <ButtonsGroup
          readonly={readOnly}
          onClick={onClick}
        />
      </div>

      <img
        src={character.image}
        className='image'
      />

      <div className='description'>
        <div className='name'>
          {readOnly ? (
            <Link to={`character/${character.id}`}>{character.name}</Link>
          ) : (
            <Input
              name='name'
              readonly={readOnly}
              view='form'
              value={character.name}
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
            name='location'
            readonly={readOnly}
            view='form'
            value={character.location.name}
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
                onChange={() => {}}
                view='small'
                value={character.status}
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
