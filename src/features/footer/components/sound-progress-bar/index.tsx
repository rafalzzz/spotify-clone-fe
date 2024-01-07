'use client';
import { useSoundProgressBar } from '@/footer/hooks/use-sound-progress-bar';

import { CustomIconButton } from '@/components/custom-icon-button';

import MutedSoundIcon from '@/icons/muted-sound';
import SoundIcon from '@/icons/sound';

import { ProgressBar } from '../progress-bar';

import './SoundProgressBar.scss';

export const SoundProgressBar = (): JSX.Element => {
  const { isMuted, volume, toggleMuted, handleChange } = useSoundProgressBar();

  return (
    <div className='sound-progress-bar'>
      <CustomIconButton
        onClick={toggleMuted}
        isActive
        testId='sound-progress-bar-button'
        ariaLabel={isMuted ? 'unmute' : 'mute'}
      >
        {isMuted ? <MutedSoundIcon /> : <SoundIcon />}
      </CustomIconButton>
      <ProgressBar value={volume} minValue={0} maxValue={1} handleChange={handleChange} />
    </div>
  );
};
