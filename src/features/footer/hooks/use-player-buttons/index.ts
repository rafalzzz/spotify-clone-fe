import { TUsePlayerButtonsProps } from '@/footer/types';

import { useMusicPlayerStore } from '@/store/music-player';

import './PlayerButtons.scss';

export const usePlayerButtons = (): TUsePlayerButtonsProps => {
  const { isPlaying } = useMusicPlayerStore();

  return { isPlaying };
};
