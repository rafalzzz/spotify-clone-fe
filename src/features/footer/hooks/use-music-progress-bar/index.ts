import { useState, useRef, useMemo, ChangeEvent, useCallback } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';
import { TUseMusicProgressBarProps } from '@/footer/types';

import { useMusicPlayerStore } from '@/store/music-player';

export const useMusicProgressBar = (): TUseMusicProgressBarProps => {
  const [currentTime, setCurrentTime] = useState(0);
  const [temporaryTime, setTemporaryTime] = useState<number | null>(null);
  const [isReversedTime, setIsReversedTime] = useState(false);

  const { ref } = useMusicPlayerContext();
  const { duration } = useMusicPlayerStore();

  const isChangingRef = useRef(false);

  const durationValue = useMemo(
    () => (isReversedTime ? duration - currentTime : duration),
    [currentTime, duration, isReversedTime],
  );

  const handleStartChange = useCallback(() => {
    isChangingRef.current = true;
  }, []);

  const handleChange = useCallback(
    ({ target: { valueAsNumber } }: ChangeEvent<HTMLInputElement>) => {
      if (isChangingRef.current) {
        setTemporaryTime(valueAsNumber);
      }
    },
    [],
  );

  const handleEndChange = useCallback(() => {
    if (ref.current && temporaryTime) {
      isChangingRef.current = false;
      ref.current.currentTime = temporaryTime;
      setTemporaryTime(null);
    }
  }, [ref, temporaryTime]);

  const onClick = useCallback(() => {
    setIsReversedTime((prevState) => !prevState);
  }, []);

  return {
    duration,
    currentTime,
    temporaryTime,
    durationValue,
    isReversedTime,
    setCurrentTime,
    handleStartChange,
    handleChange,
    handleEndChange,
    onClick,
  };
};
