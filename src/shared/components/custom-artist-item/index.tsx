import Link from 'next/link';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { Artist } from '@/shared/interfaces/artist';

import './CustomSectionItem.scss';

type TCustomArtistSection = Pick<Artist, 'artistName'>;

export const CustomArtistItem = ({ artistName }: TCustomArtistSection) => (
  <Link
    href={generateArtistRedirectionPath(artistName)}
    className='custom-artist-item'
    data-testid='custom-artist-item-redirection'
  >
    <div className='custom-artist-item__wrapper'>
      <div>{artistName}</div>
    </div>
  </Link>
);
