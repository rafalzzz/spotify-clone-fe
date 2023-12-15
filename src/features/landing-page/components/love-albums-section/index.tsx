'use client';
import { FC } from 'react';

import { TLoveAlbumsSection } from '@/landing-page/types/types';

import { CustomSectionItemPlayButton } from '@/components/custom-section-item-play-button';

import { EAlbumKeys } from '@/types/album';

import {
  CustomSection,
  CustomSectionItem,
  AlbumInformation,
  CustomSectionItemImage,
} from '@/shared/components';

export const LoveAlbumsSection: FC<TLoveAlbumsSection> = ({ albums }): JSX.Element => (
  <CustomSection title='Love albums' redirectionUrl='/love-albums'>
    {
      <ul className='custom-section__items'>
        {albums.map((album) => (
          <li key={album[EAlbumKeys.COLLECTION_ID]}>
            <CustomSectionItem collectionName={album[EAlbumKeys.COLLECTION_NAME]}>
              <>
                <CustomSectionItemImage imageUrl={album[EAlbumKeys.ARTWORK_URL_60]}>
                  {/* Temporary solution */}
                  <CustomSectionItemPlayButton
                    isActive={false}
                    isPlaying={false}
                    onClick={() => {}}
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
        ))}
      </ul>
    }
  </CustomSection>
);
