'use client';
import { FC, memo, useCallback } from 'react';

import { TLoveSongsSectionItem } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomSectionItemPlayButton } from '@/components/custom-section-item-play-button';

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useSongContextMenu } from '@/hooks/use-song-context-menu';

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

    const { contextHolder, copytoClipboard } = useCopyToClipboard();
    const items = useSongContextMenu({ song, copytoClipboard });

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
          {contextHolder}
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
              artistId={song[EMusicTrackKeys.ARTIST_ID]}
            />
          </>
        </CustomSectionItem>
      </li>
    );
  },
);
