import { create } from 'zustand';

import { TPlayAlbumAction, TPlaySongAction, TUseMusicPlayerStore } from '@/types/store';

export const useMusicPlayerStore = create<TUseMusicPlayerStore>((set) => ({
  isPlaying: false,
  isShuffle: false,
  isLoop: false,
  duration: 0,
  currentTime: 0,
  activeIndex: 0,
  songsList: [],
  trackId: null,
  albumId: null,
  togglePlay: () => set(({ isPlaying }) => ({ isPlaying: !isPlaying })),
  toggleShuffle: () => set(({ isShuffle }) => ({ isShuffle: !isShuffle })),
  toggleLoop: () => set(({ isLoop }) => ({ isLoop: !isLoop })),
  setDuration: (duration: number) => set(() => ({ duration: duration })),
  setCurrentTime: (time: number) => set(() => ({ currentTime: time })),
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
  playPrevSong: () =>
    set(({ activeIndex, songsList }) => {
      const isFirstSong = activeIndex === 0;
      const lastIndex = songsList.length - 1;

      return {
        currentTime: 0,
        activeIndex: isFirstSong ? lastIndex : activeIndex - 1,
      };
    }),
  playNextSong: () =>
    set(({ activeIndex, songsList }) => {
      const isLastSong = activeIndex === songsList.length - 1;

      return {
        currentTime: 0,
        activeIndex: isLastSong ? 0 : activeIndex + 1,
      };
    }),
}));
