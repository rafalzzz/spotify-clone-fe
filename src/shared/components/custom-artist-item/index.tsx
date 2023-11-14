import Link from 'next/link';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { Artist } from '@/types/artist';

import './CustomSectionItem.scss';

type CustomSectionArtistProps = Pick<Artist, 'artistName'>;

export const CustomArtistItem = ({ artistName }: CustomSectionArtistProps) => (
  <div className='custom-artist-item'>
    <Link
      href={generateArtistRedirectionPath(artistName)}
      className='custom-artist-item__artist'
      data-testid='custom-artist-item-artist-name'
    >
      <div>{artistName}</div>
    </Link>
  </div>
);
