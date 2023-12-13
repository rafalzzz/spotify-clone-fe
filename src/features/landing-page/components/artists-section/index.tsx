'use client';
import { TArtistSection } from '@/landing-page/types/types';

import { EArtistKeys } from '@/types/artist';

import { CustomSection, CustomArtistItem } from '@/shared/components';

export const ArtistsSection = ({ artists }: TArtistSection): JSX.Element => (
  <CustomSection title='Most Popular DJs' redirectionUrl='/most-famous-djs'>
    {
      <ul className='custom-section__items'>
        {artists.map((artist) => (
          <li key={artist[EArtistKeys.ARTIST_ID]}>
            <CustomArtistItem artistName={artist[EArtistKeys.ARTIST_NAME]} />
          </li>
        ))}
      </ul>
    }
  </CustomSection>
);
