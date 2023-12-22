import { useRef, useCallback, useEffect, useMemo, SyntheticEvent } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';
import { TUseAudio, TUseAudioProps } from '@/footer/types';

import { useMusicPlayerStore } from '@/store/music-player';

export const useAudio = ({ setCurrentTime }: TUseAudio): TUseAudioProps => {
  const { ref, isLoop } = useMusicPlayerContext();
  const { isPlaying, albumId, activeIndex, songsList, togglePlay, setDuration, setActiveIndex } =
    useMusicPlayerStore();

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

  const handlePlayingAlbum = useCallback(
    (activeIndex: number, isLastSong: boolean) => {
      setCurrentTime(0);
      setActiveIndex(isLastSong ? 0 : activeIndex + 1);
    },
    [setCurrentTime, setActiveIndex],
  );

  const onEnded = useCallback(() => {
    const isLastSong = activeIndex === songsList.length - 1;
    const isPlayingAlbum = !!albumId;

    if (isPlayingAlbum) {
      return handlePlayingAlbum(activeIndex, isLastSong);
    }

    if (!isLoop && isLastSong) {
      togglePlay();
    }
  }, [activeIndex, albumId, isLoop, songsList.length, handlePlayingAlbum, togglePlay]);

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
