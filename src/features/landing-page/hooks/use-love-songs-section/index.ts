'use client';
import { useCallback, useMemo } from 'react';

import { TUseLoveSongsSectionProps } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';

import { EMusicTrackKeys } from '@/types/music-track';
import { TSongItem } from '@/types/store';

export const useLoveSongsSection = (): TUseLoveSongsSectionProps => {
  const { isPlaying, activeIndex, songsList, changeSong, togglePlay } = useMusicPlayerStore();

  const currentPlayedSong = useMemo(() => songsList[activeIndex], [activeIndex, songsList]);

  const handleOnClick = useCallback(
    (songItem: TSongItem) => {
      const trackIsAlreadyPlayed =
        songItem[EMusicTrackKeys.PREVIEW_URL] === currentPlayedSong?.[EMusicTrackKeys.PREVIEW_URL];

      if (trackIsAlreadyPlayed) {
        return togglePlay();
      }

      changeSong({ activeIndex: 0, songs: [songItem] });
    },
    [currentPlayedSong, changeSong, togglePlay],
  );

  return { isPlaying, currentPlayedSong, handleOnClick };
};
