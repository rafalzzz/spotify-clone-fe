import { useRef, useCallback, useEffect, useMemo, SyntheticEvent } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';
import { TUseAudioProps } from '@/footer/types';

import { useMusicPlayerStore } from '@/store/music-player';

export const useAudio = (): TUseAudioProps => {
  const { ref } = useMusicPlayerContext();

  const {
    isPlaying,
    isLoop,
    albumId,
    activeIndex,
    songsList,
    togglePlay,
    setDuration,
    setCurrentTime,
    playNextSong,
  } = useMusicPlayerStore();

  const lastUpdatedTime = useRef(0);

  const currentSong = useMemo(() => songsList[activeIndex], [activeIndex, songsList]);

  const onTimeUpdate = useCallback(
    ({ target }: SyntheticEvent<HTMLAudioElement>) => {
      const { currentTime } = target as HTMLAudioElement;

      // The purpose of the following procedure is to reduce the number
      // of re-renders when updating the playback time of the song being played.
      const roundedCurrentTime = Math.floor(currentTime);

      if (roundedCurrentTime !== lastUpdatedTime.current) {
        setCurrentTime(roundedCurrentTime);
        lastUpdatedTime.current = roundedCurrentTime;
      }
    },
    [setCurrentTime],
  );

  const onLoadedMetadata = useCallback(
    ({ target }: SyntheticEvent<HTMLAudioElement>) => {
      const { duration } = target as HTMLAudioElement;
      setDuration(duration);
    },
    [setDuration],
  );

  const onEnded = useCallback(() => {
    const isLastSong = activeIndex === songsList.length - 1;
    const isPlayingAlbum = !!albumId;

    if (isPlayingAlbum) {
      return playNextSong();
    }

    if (!isLoop && isLastSong) {
      togglePlay();
    }
  }, [activeIndex, albumId, isLoop, songsList.length, playNextSong, togglePlay]);

  const handlePlaying = useCallback(() => {
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [isPlaying, ref]);

  useEffect(handlePlaying, [handlePlaying]);

  return { ref, currentSong, isPlaying, isLoop, onLoadedMetadata, onTimeUpdate, onEnded };
};
