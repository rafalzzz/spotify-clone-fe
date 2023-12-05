'use client';

import React from 'react';

import './PlayerControls.scss';
import { MusicProgressBar } from '../music-progress-bar';
import { PlayerButtons } from '../player-buttons';

export const PlayerControls = () => {
  return (
    <div className='player-controls'>
      <PlayerButtons />
      <MusicProgressBar />
    </div>
  );
};
