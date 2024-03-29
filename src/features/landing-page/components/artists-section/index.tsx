'use client';
import { FC } from 'react';

import { TArtistSection } from '@/landing-page/types';

import { useSectionStore } from '@/store/section';

import { EArtistKeys } from '@/types/artist';

import { CustomSection, CustomArtistItem } from '@/shared/components';

export const ArtistsSection: FC<TArtistSection> = ({ artists }): JSX.Element => {
  const isResizing = useSectionStore(({ isResizing }) => isResizing);
  const itemsAmount = useSectionStore(({ itemsAmount }) => itemsAmount);

  return (
    <CustomSection title='Most Popular DJs' redirectionUrl='/most-famous-djs'>
      {
        <ul className='custom-section__items'>
          {artists.map((artist, index) => {
            const sectionItem = (
              <li key={artist[EArtistKeys.ARTIST_ID]}>
                <CustomArtistItem
                  artistName={artist[EArtistKeys.ARTIST_NAME]}
                  artistId={artist[EArtistKeys.ARTIST_ID]}
                />
              </li>
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
  );
};
