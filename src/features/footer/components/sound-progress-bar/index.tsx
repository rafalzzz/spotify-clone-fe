'use client';
import { useSoundProgressBar } from '@/footer/hooks/use-sound-progress-bar';

import { CustomIconButton } from '@/components/custom-icon-button';
import { CustomTooltip } from '@/components/custom-tooltip';

import MutedSoundIcon from '@/icons/muted-sound';
import SoundIcon from '@/icons/sound';

import { ProgressBar } from '../progress-bar';

import './SoundProgressBar.scss';

export const SoundProgressBar = (): JSX.Element => {
  const { isMuted, volume, toggleMuted, handleChange } = useSoundProgressBar();

  return (
    <div className='sound-progress-bar'>
      <CustomIconButton onClick={toggleMuted} isActive>
        <CustomTooltip
          title={isMuted ? 'Unmute' : 'Mute'}
          placement='top'
          testId='sound-progress-bar-button'
        >
          {isMuted ? <MutedSoundIcon /> : <SoundIcon />}
        </CustomTooltip>
      </CustomIconButton>
      <ProgressBar value={volume} minValue={0} maxValue={1} handleChange={handleChange} />
    </div>
  );
};
