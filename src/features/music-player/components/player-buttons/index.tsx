import { PlayCircleFilled } from '@ant-design/icons';

import { CustomIconButton } from '@/components/custom-icon-button';

import LoopIcon from 'icons/loop';
import MixIcon from 'icons/mix';
import NextIcon from 'icons/next';
import PrevIcon from 'icons/prev';

import './PlayerButtons.scss';

export const PlayerButtons = () => (
  <div className='player-buttons'>
    <CustomIconButton>
      <MixIcon />
    </CustomIconButton>
    <CustomIconButton>
      <PrevIcon />
    </CustomIconButton>
    <CustomIconButton>
      <PlayCircleFilled />
    </CustomIconButton>
    <CustomIconButton>
      <NextIcon />
    </CustomIconButton>
    <CustomIconButton>
      <LoopIcon />
    </CustomIconButton>
  </div>
);
