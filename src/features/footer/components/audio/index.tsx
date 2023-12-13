import { SyntheticEvent, useCallback, useEffect } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

export const Audio = () => {
  const { ref, setCurrentTime } = useMusicPlayerContext();

  const { isPlaying, currentTrackUrl, setDuration } = useMusicPlayerStore();

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

  return (
    <audio
      ref={ref}
      onLoadedMetadata={onLoadedMetadata}
      onTimeUpdate={onTimeUpdate}
      src={currentTrackUrl}
      autoPlay={isPlaying}
    />
  );
};
