import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomIconButton } from '@/components/custom-icon-button';

import LoopIcon from '@/icons/loop';
import MixIcon from '@/icons/mix';
import NextIcon from '@/icons/next';
import PrevIcon from '@/icons/prev';

import './PlayerButtons.scss';

export const PlayerButtons = () => {
  const { isPlaying, togglePlay } = useMusicPlayerStore();
  const { isShuffle, isLoop, setIsShuffle, setIsLoop } = useMusicPlayerContext();

  return (
    <div className='player-buttons'>
      <CustomIconButton
        isActive={isShuffle}
        onClick={() => {
          setIsShuffle((prevState) => !prevState);
        }}
      >
        <MixIcon />
      </CustomIconButton>
      <CustomIconButton>
        <PrevIcon />
      </CustomIconButton>
      <CustomIconButton onClick={togglePlay} isActive={false}>
        {isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />}
      </CustomIconButton>
      <CustomIconButton>
        <NextIcon />
      </CustomIconButton>
      <CustomIconButton
        isActive={isLoop}
        onClick={() => {
          setIsLoop((prevState) => !prevState);
        }}
      >
        <LoopIcon />
      </CustomIconButton>
    </div>
  );
};
