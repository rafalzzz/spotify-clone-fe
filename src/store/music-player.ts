import { create } from 'zustand';

import { TSongItem } from '@/types/store';

type TChangeSongAction = { activeIndex: number; songs: TSongItem[] };

type TUseMusicPlayerStore = {
  isPlaying: boolean;
  duration: number;
  activeIndex: number;
  songsList: TSongItem[];
  changeSong: ({ activeIndex, songs }: TChangeSongAction) => void;
  togglePlay: () => void;
  setDuration: (duration: number) => void;
};

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
