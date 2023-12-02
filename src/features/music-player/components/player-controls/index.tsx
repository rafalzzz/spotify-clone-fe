'use client';

import React from 'react';

import './PlayerControls.scss';
import { PlayerButtons } from '../player-buttons';
import { ProgressBar } from '../progress-bar';

export const PlayerControls = () => {
  return (
    <div className='player-controls'>
      <PlayerButtons />
      <ProgressBar />
    </div>
  );
};
