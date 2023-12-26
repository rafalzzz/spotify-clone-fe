'use client';
import { FC, memo, useCallback } from 'react';

import { useLoveSongsItemContextMenu } from '@/landing-page/hooks/use-landing-page/use-love-songs-item-context-menu';
import { TLoveSongsSectionItem } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomSectionItemPlayButton } from '@/components/custom-section-item-play-button';

import { EMusicTrackKeys } from '@/types/music-track';

import {
  CustomSectionItem,
  CustomSectionItemImage,
  MusicTrackInformation,
} from '@/shared/components';
import { convertMusicTrackToSongItem, generateTrackRedirectionPath } from '@/shared/utils';

export const LoveSongsSectionItem: FC<TLoveSongsSectionItem> = memo(
  ({ song, isPlaying, isActive }) => {
    const playSong = useMusicPlayerStore(({ playSong }) => playSong);
    const togglePlay = useMusicPlayerStore(({ togglePlay }) => togglePlay);

    const items = useLoveSongsItemContextMenu({ song });

    const handleOnClick = useCallback(() => {
      if (isActive) {
        return togglePlay();
      }

      const songItem = convertMusicTrackToSongItem(song);

      playSong({ trackId: song[EMusicTrackKeys.TRACK_ID], songs: [songItem] });
    }, [isActive, song, playSong, togglePlay]);

    return (
      <li key={song[EMusicTrackKeys.TRACK_ID]} data-testid='section-item'>
        <CustomSectionItem
          href={generateTrackRedirectionPath(song[EMusicTrackKeys.TRACK_ID])}
          items={items}
        >
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
