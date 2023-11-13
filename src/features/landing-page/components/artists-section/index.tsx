'use client';

import { Artist } from '@/types/artist';

import { CustomSection, CustomArtistItem } from '@/shared/components';

export const ArtistsSection = ({ artists }: { artists: Artist[] }) => (
  <CustomSection title='Most Popular DJs' redirectionUrl='/most-famous-djs'>
    {
      <ul className='custom-section__items'>
        {artists.map(({ artistId, artistName }) => (
          <li key={artistId}>
            <CustomArtistItem artistName={artistName} />
          </li>
        ))}
      </ul>
    }
  </CustomSection>
);
