import { memo } from 'react';

import { Character } from '@/entities/Character';
import { GoBackButton, classNames } from '@/shared';

import './CharacterProfileWidget.css';

interface CharacterProfileWidgetProps {
  character?: Character;
  className?: string;
}

export const CharacterProfileWidget = memo(
  (props: CharacterProfileWidgetProps) => {
    const { className, character } = props;

    return (
      <div className={classNames('character-profile', className)}>
        <div className='character-profile__btn'>
          <GoBackButton />
        </div>
        {character ? (
          <div className='character-profile__content'>
            <div className='character-profile__content-image'>
              <img
                src={character.image}
                alt='avatar'
              />
            </div>
            <div className='character-profile__content-info'>
              <h1>{character.name}</h1>
              <span>Information</span>
              <div className='character-profile__content-table'>
                <div className='character-profile__content-table-gender'>
                  <strong>Gender</strong>
                  <span>{character.gender}</span>
                </div>
                <div className='character-profile__content-table-status'>
                  <strong>Status</strong>
                  <span>{character.status}</span>
                </div>
                <div className='character-profile__content-table-species'>
                  <strong>Specie</strong>
                  <span>{character.species}</span>
                </div>
                <div className='character-profile__content-table-origin'>
                  <strong>Origin</strong>
                  <span>{character.origin.name}</span>
                </div>
                <div className='character-profile__content-table-type'>
                  <strong>Type</strong>
                  <span>{character.type}</span>
                </div>
                <div className='character-profile__content-table-location'>
                  <strong>Location</strong>
                  <span>{character.location.name}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='character-profile__content'>No data...</div>
        )}
      </div>
    );
  }
);
