'use client';
import { useCallback, useMemo } from 'react';

import { useMusicPlayerStore } from '@/store/music-player';

import { TUseCustomSongPlayButtonProps } from '@/types/hooks';
import { EMusicTrackKeys } from '@/types/music-track';
import { TSongItem } from '@/types/store';

export const useCustomSongPlayButton = (): TUseCustomSongPlayButtonProps => {
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
