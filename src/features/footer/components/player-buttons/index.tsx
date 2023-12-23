import { useCallback } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomIconButton } from '@/components/custom-icon-button';

import LoopIcon from '@/icons/loop';
import MixIcon from '@/icons/mix';
import NextIcon from '@/icons/next';
import PrevIcon from '@/icons/prev';

import { PlayerPlayButton } from '../player-play-button';

import './PlayerButtons.scss';

export const MIN_TIME_TO_RESET_CURRENT_TIME = 5;

export const PlayerButtons = (): JSX.Element => {
  const { ref } = useMusicPlayerContext();

  const isShuffle = useMusicPlayerStore(({ isShuffle }) => isShuffle);
  const isLoop = useMusicPlayerStore(({ isLoop }) => isLoop);
  const toggleShuffle = useMusicPlayerStore(({ toggleShuffle }) => toggleShuffle);
  const playPrevSong = useMusicPlayerStore(({ playPrevSong }) => playPrevSong);
  const playNextSong = useMusicPlayerStore(({ playNextSong }) => playNextSong);
  const toggleLoop = useMusicPlayerStore(({ toggleLoop }) => toggleLoop);

  const isOneSong = useCallback(() => {
    const { isLoop, songsList } = useMusicPlayerStore.getState();
    return isLoop || songsList.length === 1;
  }, []);

  const handlePlayPrevSong = useCallback(() => {
    if (!ref.current) {
      return;
    }

    const { currentTime } = useMusicPlayerStore.getState();

    if (currentTime > MIN_TIME_TO_RESET_CURRENT_TIME || isOneSong()) {
      return (ref.current.currentTime = 0);
    }

    playPrevSong();
  }, [ref, isOneSong, playPrevSong]);

  const handlePlayNextSong = useCallback(() => {
    if (!ref.current) {
      return;
    }

    if (isOneSong()) {
      return (ref.current.currentTime = 0);
    }

    playNextSong();
  }, [ref, isOneSong, playNextSong]);

  return (
    <div className='player-buttons'>
      <CustomIconButton isActive={isShuffle} onClick={toggleShuffle} testId='shuffle-button'>
        <MixIcon />
      </CustomIconButton>
      <CustomIconButton testId='prev-song-button' onClick={handlePlayPrevSong}>
        <PrevIcon />
      </CustomIconButton>
      <PlayerPlayButton />
      <CustomIconButton testId='next-song-button' onClick={handlePlayNextSong}>
        <NextIcon />
      </CustomIconButton>
      <CustomIconButton isActive={isLoop} testId='loop-button' onClick={toggleLoop}>
        <LoopIcon />
      </CustomIconButton>
    </div>
  );
};
