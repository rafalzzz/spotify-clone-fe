import { useMusicPlayerStore } from '@/store/music-player';

import './PlayerButtons.scss';

export const usePlayerButtons = () => {
  const { isPlaying } = useMusicPlayerStore();

  return { isPlaying };
};
