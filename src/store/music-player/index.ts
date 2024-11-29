import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { getShuffledIndexes } from '@/utils/get-shuffled-indexes';

import { TPlayAlbumAction, TPlaySongAction, TUseMusicPlayerStore } from '@/types/store';

export const useMusicPlayerStore = create(
  persist<TUseMusicPlayerStore>(
    (set) => ({
      isPlaying: false,
      isShuffle: false,
      isLoop: false,
      duration: 0,
      currentTime: 0,
      activeIndex: 0,
      songsList: [],
      shuffledIndexes: [],
      trackId: null,
      albumId: null,
      togglePlay: () => set(({ isPlaying }) => ({ isPlaying: !isPlaying })),
      toggleShuffle: () =>
        set(({ isShuffle, songsList }) => ({
          isShuffle: !isShuffle,
          shuffledIndexes:
            !isShuffle && songsList.length > 1 ? getShuffledIndexes(songsList.length) : [],
        })),
      toggleLoop: () => set(({ isLoop }) => ({ isLoop: !isLoop })),
      setDuration: (duration: number) => set(() => ({ duration: duration })),
      setCurrentTime: (time: number) => set(() => ({ currentTime: time })),
      playSong: ({ trackId, songs }: TPlaySongAction) =>
        set((isShuffle) => ({
          trackId,
          isPlaying: true,
          duration: 0,
          activeIndex: 0,
          songsList: songs,
          albumId: null,
          shuffledIndexes: isShuffle ? [0] : []
        })),
      playAlbum: ({ albumId, songs }: TPlayAlbumAction) =>
        set((isShuffle) => ({
          albumId,
          isPlaying: true,
          duration: 0,
          activeIndex: 0,
          songsList: songs,
          shuffledIndexes: isShuffle && songs.length > 1 ? getShuffledIndexes(songs.length) : [],
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
    }),
    {
      name: 'music-player',
    },
  ),
);
