import { create } from 'zustand';

import { TChangeSongAction, TUseMusicPlayerStore } from '@/types/store';

export const useMusicPlayerStore = create<TUseMusicPlayerStore>((set) => ({
  isPlaying: false,
  duration: 0,
  activeIndex: 0,
  songsList: [],
  changeSong: ({ activeIndex, songs }: TChangeSongAction) =>
    set(() => ({ isPlaying: true, duration: 0, activeIndex: activeIndex, songsList: songs })),
  togglePlay: () => set(({ isPlaying }) => ({ isPlaying: !isPlaying })),
  setDuration: (duration: number) => set(() => ({ duration: duration })),
}));
