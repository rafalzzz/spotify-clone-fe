'use client';
import { FC, memo, useCallback } from 'react';

import { TLoveSongsSectionItem } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomSectionItemPlayButton } from '@/components/custom-section-item-play-button';

import { EMusicTrackKeys } from '@/types/music-track';

import {
  CustomSectionItem,
  CustomSectionItemImage,
  MusicTrackInformation,
} from '@/shared/components';

export const LoveSongsSectionItem: FC<TLoveSongsSectionItem> = memo(
  ({ song, isPlaying, isActive }) => {
    const changeSong = useMusicPlayerStore(({ changeSong }) => changeSong);
    const togglePlay = useMusicPlayerStore(({ togglePlay }) => togglePlay);

    const handleOnClick = useCallback(() => {
      if (isActive) {
        return togglePlay();
      }

      const songItem = {
        artistName: song[EMusicTrackKeys.ARTIST_NAME],
        trackName: song[EMusicTrackKeys.TRACK_NAME],
        previewUrl: song[EMusicTrackKeys.PREVIEW_URL],
        artworkUrl60: song[EMusicTrackKeys.ARTWORK_URL_60],
      };

      changeSong({ activeIndex: 0, songs: [songItem] });
    }, [isActive, song, changeSong, togglePlay]);

    return (
      <li key={song[EMusicTrackKeys.TRACK_ID]} data-testid='section-item'>
        <CustomSectionItem collectionName={song[EMusicTrackKeys.COLLECTION_NAME]}>
          <>
            <CustomSectionItemImage imageUrl={song[EMusicTrackKeys.ARTWORK_URL_60]}>
              <CustomSectionItemPlayButton
                isActive={isActive}
                isPlaying={isPlaying}
                onClick={handleOnClick}
              />
            </CustomSectionItemImage>
            <MusicTrackInformation
              trackName={song[EMusicTrackKeys.TRACK_NAME]}
              artistName={song[EMusicTrackKeys.ARTIST_NAME]}
            />
          </>
        </CustomSectionItem>
      </li>
    );
  },
);
