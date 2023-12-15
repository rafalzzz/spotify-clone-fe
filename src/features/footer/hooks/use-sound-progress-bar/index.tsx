'use client';
import { useState, useCallback, useRef, ChangeEvent, useEffect } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';
import { TUseSoundProgressBar } from '@/footer/types';

const INITIAL_VOLUME_VALUE = 0.5;

export const useSoundProgressBar = (): TUseSoundProgressBar => {
  const [volume, setVolume] = useState(INITIAL_VOLUME_VALUE);
  const [isMuted, setIsMuted] = useState(false);

  const { ref } = useMusicPlayerContext();

  const prevVolumeValue = useRef<number | null>(null);

  const toggleMuted = useCallback(() => {
    setIsMuted((prevState) => {
      if (!ref.current) return prevState;

      if (!prevState) {
        ref.current.volume = 0;
        prevVolumeValue.current = volume;
        setVolume(0);
      } else {
        const prevValue = Number(prevVolumeValue.current);
        setVolume(prevValue);
        ref.current.volume = prevValue;
        prevVolumeValue.current = null;
      }

      return !prevState;
    });
  }, [ref, volume]);

  const handleChange = useCallback(
    ({ target: { valueAsNumber } }: ChangeEvent<HTMLInputElement>) => {
      if (ref.current) {
        ref.current.volume = valueAsNumber;
      }

      // Change sound icon when isMuted is equal true
      setIsMuted((prevState) => (prevState ? !prevState : prevState));

      setVolume(valueAsNumber);
    },
    [ref],
  );

  const setVolumeToInitialValue = useCallback(() => {
    if (ref.current) {
      ref.current.volume = INITIAL_VOLUME_VALUE;
    }
  }, [ref]);

  useEffect(setVolumeToInitialValue, [setVolumeToInitialValue]);

  return { isMuted, volume, toggleMuted, handleChange };
};
