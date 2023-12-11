'use client';

import { TArtistSection } from '@/landing-page/types/types';

import { CustomSection, CustomArtistItem } from '@/shared/components';

export const ArtistsSection = ({ artists }: TArtistSection) => (
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
