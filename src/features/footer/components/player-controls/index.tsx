'use client';

import React from 'react';

import { Audio } from '../audio';
import { MusicProgressBar } from '../music-progress-bar';
import { PlayerButtons } from '../player-buttons';

import './PlayerControls.scss';

export const PlayerControls = () => (
  <div className='player-controls'>
    <PlayerButtons />
    <MusicProgressBar />
    <Audio />
  </div>
);
