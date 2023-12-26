'use client';
import { FC, memo, useCallback } from 'react';

import { TLoveAlbumsSectionItem } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomSectionItemPlayButton } from '@/components/custom-section-item-play-button';

import { useGetAlbumSongs } from '@/hooks/use-fetch-album-songs';

import { generateAlbumRedirectionPath } from '@/utils/generate-album-redirection-path';

import { EAlbumKeys } from '@/types/album';

import { AlbumInformation, CustomSectionItem, CustomSectionItemImage } from '@/shared/components';

export const LoveAlbumsSectionItem: FC<TLoveAlbumsSectionItem> = memo(
  ({ album, isPlaying, isActive }) => {
    const playAlbum = useMusicPlayerStore(({ playAlbum }) => playAlbum);
    const togglePlay = useMusicPlayerStore(({ togglePlay }) => togglePlay);

    const albumId = album[EAlbumKeys.COLLECTION_ID];

    const { cachedData, fetchAlbumSongsAction } = useGetAlbumSongs({
      albumId,
      onSuccess: (data) => {
        playAlbum({ albumId: album[EAlbumKeys.COLLECTION_ID], songs: data });
      },
    });

    const handleOnClick = useCallback(() => {
      if (isActive) {
        return togglePlay();
      }

      if (cachedData) {
        return playAlbum({ albumId, songs: cachedData });
      }

      fetchAlbumSongsAction.refetch();
    }, [albumId, cachedData, fetchAlbumSongsAction, isActive, playAlbum, togglePlay]);

    return (
      <li key={album[EAlbumKeys.COLLECTION_ID]} data-testid='section-item'>
        <CustomSectionItem href={generateAlbumRedirectionPath(album[EAlbumKeys.COLLECTION_ID])}>
          <>
            <CustomSectionItemImage imageUrl={album[EAlbumKeys.ARTWORK_URL_60]}>
              <CustomSectionItemPlayButton
                isActive={isActive}
                isPlaying={isPlaying}
                onClick={handleOnClick}
              />
            </CustomSectionItemImage>
            <AlbumInformation
              collectionName={album[EAlbumKeys.COLLECTION_NAME]}
              releaseDate={album[EAlbumKeys.RELEASE_DATE]}
              artistName={album[EAlbumKeys.ARTIST_NAME]}
            />
          </>
        </CustomSectionItem>
      </li>
    );
  },
);
