'use client';
import React from 'react';

import { MusicProgressBar } from '../music-progress-bar';
import { PlayerButtons } from '../player-buttons';

import './PlayerControls.scss';

export const PlayerControls = (): JSX.Element => (
  <div className='player-controls'>
    <PlayerButtons />
    <MusicProgressBar />
  </div>
);
