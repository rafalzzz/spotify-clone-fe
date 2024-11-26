import { useMemo } from 'react';

import { useMusicPlayerStore } from '@/store/music-player';

import { TSongItem } from '@/types/components';

export const useCurrentSong = (): TSongItem => {
  const activeIndex = useMusicPlayerStore(({ activeIndex }) => activeIndex);
  const songsList = useMusicPlayerStore(({ songsList }) => songsList);

  const currentSong = useMemo(() => {
    const { isShuffle, shuffledIndexes } = useMusicPlayerStore.getState();
    const index = isShuffle ? shuffledIndexes[activeIndex] : activeIndex;
    return songsList[index];
  }, [activeIndex, songsList]);

  return currentSong;
};
