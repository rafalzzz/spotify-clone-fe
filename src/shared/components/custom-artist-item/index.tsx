import Link from 'next/link';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { TCustomArtistSection } from '@/types/components';

import './CustomSectionItem.scss';

export const CustomArtistItem = ({ artistName }: TCustomArtistSection): JSX.Element => (
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
