import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomIconButton } from '@/components/custom-icon-button';

import LoopIcon from '@/icons/loop';
import MixIcon from '@/icons/mix';
import NextIcon from '@/icons/next';
import PrevIcon from '@/icons/prev';

import './PlayerButtons.scss';

export const PlayerButtons = () => {
  const { isPlaying, togglePlay } = useMusicPlayerStore();

  return (
    <div className='player-buttons'>
      <CustomIconButton>
        <MixIcon />
      </CustomIconButton>
      <CustomIconButton>
        <PrevIcon />
      </CustomIconButton>
      <CustomIconButton onClick={togglePlay}>
        {isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />}
      </CustomIconButton>
      <CustomIconButton>
        <NextIcon />
      </CustomIconButton>
      <CustomIconButton>
        <LoopIcon />
      </CustomIconButton>
    </div>
  );
};
