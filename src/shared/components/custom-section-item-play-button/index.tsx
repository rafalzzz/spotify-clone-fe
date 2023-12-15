import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import { FC } from 'react';

import { TCustomSectionItemPlayButton } from '@/types/components';

import './CustomSectionItemPlayButton.scss';

export const CustomSectionItemPlayButton: FC<TCustomSectionItemPlayButton> = ({
  isActive,
  isPlaying,
  onClick,
}): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };

  return (
    <button
      className={`custom-section-item-play-button ${
        isActive ? `custom-section-item-play-button--visible` : ''
      }`}
      onClick={handleClick}
      data-testid='custom-section-item-play-button'
    >
      {isPlaying && isActive ? (
        <PauseCircleFilled className='antd-icon' data-testid='custom-section-item-pause-icon' />
      ) : (
        <PlayCircleFilled className='antd-icon' data-testid='custom-section-item-play-icon' />
      )}
    </button>
  );
};
