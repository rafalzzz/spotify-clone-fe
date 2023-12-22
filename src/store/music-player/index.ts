import { create } from 'zustand';

import { TPlayAlbumAction, TPlaySongAction, TUseMusicPlayerStore } from '@/types/store';

export const useMusicPlayerStore = create<TUseMusicPlayerStore>((set) => ({
  isPlaying: false,
  duration: 0,
  activeIndex: 0,
  songsList: [],
  trackId: null,
  albumId: null,
  togglePlay: () => set(({ isPlaying }) => ({ isPlaying: !isPlaying })),
  setDuration: (duration: number) => set(() => ({ duration: duration })),
  setActiveIndex: (activeIndex: number) => set(() => ({ activeIndex })),
  playSong: ({ trackId, songs }: TPlaySongAction) =>
    set(() => ({
      trackId,
      isPlaying: true,
      duration: 0,
      activeIndex: 0,
      songsList: songs,
      albumId: null,
    })),
  playAlbum: ({ albumId, songs }: TPlayAlbumAction) =>
    set(() => ({
      albumId,
      isPlaying: true,
      duration: 0,
      activeIndex: 0,
      songsList: songs,
      trackId: null,
    })),
}));
