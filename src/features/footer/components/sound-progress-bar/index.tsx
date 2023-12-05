'use client';

import { CustomIconButton } from '@/components/custom-icon-button';

import SoundIcon from 'icons/sound';

import { ProgressBar } from '../progress-bar';

import './SoundProgressBar.scss';

export const SoundProgressBar = () => (
  <div className='sound-progress-bar'>
    <CustomIconButton>
      <SoundIcon />
    </CustomIconButton>
    <ProgressBar />
  </div>
);
