import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomIconButton } from '@/components/custom-icon-button';

import LoopIcon from '@/icons/loop';
import MixIcon from '@/icons/mix';
import NextIcon from '@/icons/next';
import PrevIcon from '@/icons/prev';

import './PlayerButtons.scss';

export const PlayerButtons = (): JSX.Element => {
  const { isPlaying, togglePlay } = useMusicPlayerStore();
  const { isShuffle, isLoop, setIsShuffle, setIsLoop } = useMusicPlayerContext();

  return (
    <div className='player-buttons'>
      <CustomIconButton
        isActive={isShuffle}
        onClick={() => {
          setIsShuffle((prevState) => !prevState);
        }}
        testId='shuffle-button'
      >
        <MixIcon />
      </CustomIconButton>
      <CustomIconButton testId='prev-song-button'>
        <PrevIcon />
      </CustomIconButton>
      <CustomIconButton onClick={togglePlay} isActive={false} testId='play-button'>
        {isPlaying ? (
          <PauseCircleFilled data-testid='player-buttons-pause-icon' />
        ) : (
          <PlayCircleFilled data-testid='player-buttons-play-icon' />
        )}
      </CustomIconButton>
      <CustomIconButton testId='next-song-button'>
        <NextIcon />
      </CustomIconButton>
      <CustomIconButton
        isActive={isLoop}
        testId='loop-button'
        onClick={() => {
          setIsLoop((prevState) => !prevState);
        }}
      >
        <LoopIcon />
      </CustomIconButton>
    </div>
  );
};
