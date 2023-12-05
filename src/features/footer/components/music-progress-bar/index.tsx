import React from 'react';

import { ProgressBar } from '../progress-bar';

import './MusicProgressBar.scss';

export const MusicProgressBar = () => (
  <div className='music-progress-bar'>
    <div className='music-progress-bar__timer'>0:00</div>
    <ProgressBar />
    <div className='music-progress-bar__timer'>1:00</div>
  </div>
);
