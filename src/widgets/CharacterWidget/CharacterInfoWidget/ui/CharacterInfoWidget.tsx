import { memo } from 'react';

import { Character, GoBackButton, classNames } from '@/shared';

import './CharacterInfoWidget.css';

interface CharacterInfoWidgetProps {
  character: Character | undefined;
  className?: string;
}

export const CharacterInfoWidget = memo((props: CharacterInfoWidgetProps) => {
  const { className, character } = props;

  return (
    <div className={classNames('CharacterInfoWidget', {}, [className])}>
      <div className='CharacterInfoWidget_btn'>
        <GoBackButton />
      </div>
      <div className='CharacterInfoWidget_content'>
        <div className='CharacterInfoWidget_image'>
          <img
            src={character?.image}
            alt='аватар'
          />
        </div>
        <div className='CharacterInfoWidget_info'>
          <h1>{character?.name}</h1>
          <span>Information</span>
          <div className='CharacterInfoWidget_table'>
            <div>
              <strong>Gender</strong>
              <span>{character?.gender}</span>
            </div>
            <div>
              <strong>Status</strong>
              <span>{character?.status}</span>
            </div>
            <div>
              <strong>Specie</strong>
              <span>{character?.species}</span>
            </div>
            <div>
              <strong>Origin</strong>
              <span>{character?.location.name}</span>
            </div>
            <div>
              <strong>Type</strong>
              <span>{character?.location.name}</span>
            </div>
            <div>
              <strong>Location</strong>
              <span>{character?.location.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
