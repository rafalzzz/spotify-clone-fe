'use client';

import { TLoveAlbumsSection } from '@/landing-page/types/types';

import { CustomSection, CustomSectionItem, AlbumInformation } from '@/shared/components';

export const LoveAlbumsSection = ({ albums }: TLoveAlbumsSection) => (
  <CustomSection title='Love albums' redirectionUrl='/love-albums'>
    {
      <ul className='custom-section__items'>
        {albums.map(({ collectionId, artworkUrl60, collectionName, releaseDate, artistName }) => (
          <li key={collectionId}>
            <CustomSectionItem
              collectionName={collectionName}
              imageUrl={artworkUrl60}
              onClick={() => {
                // TODO - add play song action
              }}
            >
              <AlbumInformation
                collectionName={collectionName}
                releaseDate={releaseDate}
                artistName={artistName}
              />
            </CustomSectionItem>
          </li>
        ))}
      </ul>
    }
  </CustomSection>
);
