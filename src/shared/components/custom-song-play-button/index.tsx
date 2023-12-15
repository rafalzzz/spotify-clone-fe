'use client';
import { FC } from 'react';

import { useCustomSongPlayButton } from '@/hooks/use-custom-song-play-button';

import { TCustomSongPlayButton } from '@/types/components';
import { EMusicTrackKeys } from '@/types/music-track';

import { CustomSectionItemPlayButton } from '../custom-section-item-play-button';

export const CustomSongPlayButton: FC<TCustomSongPlayButton> = ({ song }): JSX.Element => {
  const { isPlaying, currentPlayedSong, handleOnClick } = useCustomSongPlayButton();

  return (
    <CustomSectionItemPlayButton
      isActive={
        song[EMusicTrackKeys.PREVIEW_URL] === currentPlayedSong?.[EMusicTrackKeys.PREVIEW_URL]
      }
      isPlaying={isPlaying}
      onClick={() => {
        handleOnClick({
          artistName: song[EMusicTrackKeys.ARTIST_NAME],
          trackName: song[EMusicTrackKeys.TRACK_NAME],
          previewUrl: song[EMusicTrackKeys.PREVIEW_URL],
          artworkUrl60: song[EMusicTrackKeys.ARTWORK_URL_60],
        });
      }}
    />
  );
};
