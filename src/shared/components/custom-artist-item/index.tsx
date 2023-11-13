import Link from 'next/link';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { Artist } from '@/types/artist';

import './CustomSectionItem.scss';

type CustomSectionArtistProps = Pick<Artist, 'artistName'>;

export const CustomArtistItem = ({ artistName }: CustomSectionArtistProps) => (
  <div className='custom-artist-item'>
    <Link
      href={generateArtistRedirectionPath(artistName)}
      className='music-track-informations__text music-track-informations__artist'
      data-testid='music-track-informations-artist-name'
    >
      <div>{artistName}</div>
    </Link>
  </div>
);
