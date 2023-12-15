import React from 'react';

import { useMusicProgressBar } from '@/footer/hooks/use-music-progress-bar';
import { ETextAlign } from '@/footer/types';

import { Audio } from '../audio';
import { Duration } from '../duration';
import { ProgressBar } from '../progress-bar';

import './MusicProgressBar.scss';

export const MusicProgressBar = (): JSX.Element => {
  const {
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
  } = useMusicProgressBar();

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
