import Link from 'next/link';

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
  const releaseYear = releaseDate.split('-')[0];

  return (
    <div className='album-informations'>
      <CustomTooltip title={collectionName} testId='album-informations-track-name-tooltip'>
        <h4 className='album-informations__text' data-testid='album-informations-track-name'>
          {collectionName}
        </h4>
      </CustomTooltip>
      <div className='album-informations__wrapper'>
        <span className='album-informations__release-date'>{releaseYear}</span>
        <span className='album-informations__separator'>&#x2022;</span>
        <CustomTooltip title={artistName} testId='album-informations-artist-name-tooltip'>
          <Link
            href={`/artist/${artistName.toLocaleLowerCase()}`}
            className='album-informations__text album-informations__artist'
            data-testid='album-informations-artist-name'
          >
            <span>{artistName}</span>
          </Link>
        </CustomTooltip>
      </div>
    </div>
  );
};