import { useRef, useCallback, useEffect, useMemo, SyntheticEvent } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';
import { TUseAudio, TUseAudioProps } from '@/footer/types';

import { useMusicPlayerStore } from '@/store/music-player';

export const useAudio = ({ setCurrentTime }: TUseAudio): TUseAudioProps => {
  const { ref, isLoop } = useMusicPlayerContext();
  const { isPlaying, activeIndex, songsList, setDuration, togglePlay } = useMusicPlayerStore();

  const lastUpdatedTime = useRef(0);

  const currentSong = useMemo(() => songsList[activeIndex], [activeIndex, songsList]);

  const onTimeUpdate = useCallback(
    ({ target }: SyntheticEvent<HTMLAudioElement>) => {
      const { currentTime } = target as HTMLAudioElement;

      // The purpose of the following procedure is to reduce the number
      // of re-renders when updating the playback time of the song being played.
      const roundedCurrentTime = Math.ceil(currentTime);

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

    if (!isLoop && isLastSong) {
      togglePlay();
    }
  }, [activeIndex, isLoop, songsList.length, togglePlay]);

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
