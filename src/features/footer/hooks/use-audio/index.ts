import { SyntheticEvent, useCallback, useEffect, useMemo } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';
import { TUseAudioProps } from '@/footer/types';

import { useMusicPlayerStore } from '@/store/music-player';

export const useAudio = (): TUseAudioProps => {
  const { ref, isLoop, setCurrentTime } = useMusicPlayerContext();
  const { isPlaying, activeIndex, songsList, setDuration } = useMusicPlayerStore();

  const currentSong = useMemo(() => songsList[activeIndex], [activeIndex, songsList]);

  const onLoadedMetadata = useCallback(
    ({ target }: SyntheticEvent<HTMLAudioElement>) => {
      const { duration } = target as HTMLAudioElement;
      setDuration(duration);
    },
    [setDuration],
  );

  const onTimeUpdate = useCallback(
    ({ target }: SyntheticEvent<HTMLAudioElement>) => {
      const { currentTime } = target as HTMLAudioElement;
      setCurrentTime(currentTime);
    },
    [setCurrentTime],
  );

  const handlePlaying = useCallback(() => {
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [isPlaying, ref]);

  useEffect(handlePlaying, [handlePlaying]);

  const onEnded = useCallback(() => {
    if (isLoop) {
      setCurrentTime(0);
      ref.current?.play();
    }
  }, [isLoop, ref, setCurrentTime]);

  return { ref, currentSong, isPlaying, onLoadedMetadata, onTimeUpdate, onEnded };
};
