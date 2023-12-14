import React, { ChangeEvent, useCallback } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

import { Duration } from '../duration';
import { ProgressBar } from '../progress-bar';

import './MusicProgressBar.scss';

export const MusicProgressBar = (): JSX.Element => {
  const { duration } = useMusicPlayerStore();
  const { ref, currentTime } = useMusicPlayerContext();

  const handleChange = useCallback(
    ({ target: { valueAsNumber } }: ChangeEvent<HTMLInputElement>) => {
      if (ref.current) {
        ref.current.currentTime = valueAsNumber;
      }
    },
    [ref],
  );

  return (
    <div className='music-progress-bar'>
      <Duration seconds={currentTime} />
      <ProgressBar
        value={currentTime}
        minValue={0}
        maxValue={duration}
        handleChange={handleChange}
      />
      <Duration seconds={duration} />
    </div>
  );
};
