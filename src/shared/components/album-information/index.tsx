import { useRouter } from 'next/navigation';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { TAlbumInformation } from '@/types/components';

import { CustomTooltip } from '../custom-tooltip';

import './AlbumInformation.scss';

export const AlbumInformation = ({
  collectionName,
  releaseDate,
  artistName,
}: TAlbumInformation): JSX.Element => {
  const router = useRouter();
  const releaseYear = releaseDate.split('-')[0];

  const handleArtistClick = () => {
    const path = generateArtistRedirectionPath(artistName);
    router.push(path);
  };

  return (
    <div className='album-information'>
      <CustomTooltip title={collectionName} testId='album-information-collection-name-tooltip'>
        <h4 className='album-information__text' data-testid='album-information-collection-name'>
          {collectionName}
        </h4>
      </CustomTooltip>
      <div className='album-information__wrapper'>
        <span
          className='album-information__release-date'
          data-testid='album-information-release-date'
        >
          {releaseYear}
        </span>
        <span className='album-information__separator'>&#x2022;</span>
        <button
          className='album-information__text album-information__artist'
          data-testid='album-information-artist-name'
          onClick={handleArtistClick}
        >
          <CustomTooltip title={artistName} testId='album-information-artist-name-tooltip'>
            <span>{artistName}</span>
          </CustomTooltip>
        </button>
      </div>
    </div>
  );
};
