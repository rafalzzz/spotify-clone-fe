import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { CustomIconButton } from '@/components/custom-icon-button';

import LoopIcon from '@/icons/loop';
import MixIcon from '@/icons/mix';
import NextIcon from '@/icons/next';
import PrevIcon from '@/icons/prev';

import './PlayerButtons.scss';
import { PlayerPlayButton } from '../player-play-button';

export const PlayerButtons = (): JSX.Element => {
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
      <PlayerPlayButton />
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
