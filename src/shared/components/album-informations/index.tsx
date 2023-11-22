import { useRouter } from 'next/navigation';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { CustomTooltip } from '../custom-tooltip';

import './AlbumInformations.scss';

type AlbumInformationsProps = {
  collectionName: string;
  releaseDate: string;
  artistName: string;
};

export const AlbumInformations = ({
  collectionName,
  releaseDate,
  artistName,
}: AlbumInformationsProps) => {
  const router = useRouter();
  const releaseYear = releaseDate.split('-')[0];

  const handleArtistClick = () => {
    const path = generateArtistRedirectionPath(artistName);
    router.push(path);
  };

  return (
    <div className='album-informations'>
      <CustomTooltip title={collectionName} testId='album-informations-collection-name-tooltip'>
        <h4 className='album-informations__text' data-testid='album-informations-collection-name'>
          {collectionName}
        </h4>
      </CustomTooltip>
      <div className='album-informations__wrapper'>
        <span
          className='album-informations__release-date'
          data-testid='album-informations-release-date'
        >
          {releaseYear}
        </span>
        <span className='album-informations__separator'>&#x2022;</span>
        <button
          className='album-informations__text album-informations__artist'
          data-testid='album-informations-artist-name'
          onClick={handleArtistClick}
        >
          <CustomTooltip title={artistName} testId='album-informations-artist-name-tooltip'>
            <span>{artistName}</span>
          </CustomTooltip>
        </button>
      </div>
    </div>
  );
};
