import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { TSongItem } from '@/types/components';
import { EMusicTrackKeys } from '@/types/music-track';
import { TUseFavoritesStore } from '@/types/store';

export const useFavoritesStore = create(
  persist<TUseFavoritesStore>(
    (set) => ({
      favorites: [],
      addToFavorites: (songItem: TSongItem) =>
        set(({ favorites }) => ({ favorites: [...favorites, songItem] })),
      removeFromFavorites: (songId: number) =>
        set(({ favorites }) => ({
          favorites: favorites.filter((songItem) => songItem[EMusicTrackKeys.TRACK_ID] !== songId),
        })),
    }),
    {
      name: 'favorites',
    },
  ),
);
