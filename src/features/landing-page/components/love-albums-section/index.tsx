'use client';

import { CustomSection, CustomSectionItem, AlbumInformations } from '@/shared/components';
import { Album } from '@/shared/interfaces/album';

export const LoveAlbumsSection = ({ albums }: { albums: Album[] }) => (
  <CustomSection title='Love albums' redirectionUrl='/love-albums'>
    {
      <ul className='custom-section__items'>
        {albums.map(({ collectionId, artworkUrl100, collectionName, releaseDate, artistName }) => (
          <li key={collectionId}>
            <CustomSectionItem
              imageUrl={artworkUrl100}
              onClick={() => {
                // TODO - add play song action
              }}
            >
              <AlbumInformations
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
