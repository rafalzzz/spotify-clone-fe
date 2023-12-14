import React, { useState, useRef, useMemo, ChangeEvent, useCallback } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';
import { ETextAlign } from '@/footer/types';

import { useMusicPlayerStore } from '@/store/music-player';

import { Audio } from '../audio';
import { Duration } from '../duration';
import { ProgressBar } from '../progress-bar';

import './MusicProgressBar.scss';

export const MusicProgressBar = (): JSX.Element => {
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

  return (
    <div className='music-progress-bar'>
      <Audio setCurrentTime={setCurrentTime} />
      <Duration seconds={currentTime} textAlign={ETextAlign.END} disabled />
      <ProgressBar
        value={temporaryTime ?? currentTime}
        minValue={0}
        maxValue={duration}
        handleStartChange={handleStartChange}
        handleChange={handleChange}
        handleEndChange={handleEndChange}
      />
      <Duration seconds={durationValue} isReversedTime={isReversedTime} onClick={onClick} />
    </div>
  );
};
