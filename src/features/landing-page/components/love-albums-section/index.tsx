'use client';
import { FC } from 'react';
import { QueryClientProvider } from 'react-query';

import { TLoveAlbumsSection } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';
import { useSectionStore } from '@/store/section';

import { EAlbumKeys } from '@/types/album';

import { CustomSection } from '@/shared/components';

import { queryClient } from '@/configs/query-client';

import { LoveAlbumsSectionItem } from '../love-albums-section-item';

export const LoveAlbumsSection: FC<TLoveAlbumsSection> = ({ albums }): JSX.Element => {
  const isPlaying = useMusicPlayerStore(({ isPlaying }) => isPlaying);
  const albumId = useMusicPlayerStore(({ albumId }) => albumId);

  const isResizing = useSectionStore(({ isResizing }) => isResizing);
  const itemsAmount = useSectionStore(({ itemsAmount }) => itemsAmount);

  return (
    <QueryClientProvider client={queryClient}>
      <CustomSection title='Love albums' redirectionUrl='/love-albums'>
        {
          <ul className='custom-section__items'>
            {albums.map((album, index) => {
              const sectionItem = (
                <LoveAlbumsSectionItem
                  key={album[EAlbumKeys.COLLECTION_ID]}
                  album={album}
                  isActive={album[EAlbumKeys.COLLECTION_ID] === albumId}
                  isPlaying={album[EAlbumKeys.COLLECTION_ID] === albumId && isPlaying}
                />
              );

              if (isResizing) {
                return sectionItem;
              }

              if (!isResizing && itemsAmount && itemsAmount <= index) {
                return null;
              }

              return sectionItem;
            })}
          </ul>
        }
      </CustomSection>
    </QueryClientProvider>
  );
};
