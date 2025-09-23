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
    <div className={classNames('characterInfoWidget', {}, [className])}>
      <div className='characterInfoWidget_btn'>
        <GoBackButton />
      </div>
      <div className='characterInfoWidget_content'>
        <div className='characterInfoWidget_image'>
          <img
            src={character?.image}
            alt='аватар'
          />
        </div>
        <div className='characterInfoWidget_info'>
          <h1>{character?.name}</h1>
          <span>Information</span>
          <div className='characterInfoWidget_table'>
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
