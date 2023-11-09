import Link from 'next/link';

import { CustomTooltip } from '../custom-tooltip';

import './MusicTrackInformations.scss';

type MusicTrackInformationsProps = {
  trackName: string;
  artistName: string;
};

export const MusicTrackInformations = ({ trackName, artistName }: MusicTrackInformationsProps) => {
  const mainArtist = artistName.split(',')[0];

  return (
    <div className='music-track-informations'>
      <CustomTooltip title={trackName} testId='music-track-informations-track-name-tooltip'>
        <h4
          className='music-track-informations__text'
          data-testid='music-track-informations-track-name'
        >
          {trackName}
        </h4>
      </CustomTooltip>
      <CustomTooltip title={mainArtist} testId='music-track-informations-artist-name-tooltip'>
        <Link
          href={`/artist/${artistName.toLocaleLowerCase()}`}
          className='music-track-informations__text music-track-informations__artist'
        >
          <span data-testid='music-track-informations-artist-name'>{artistName}</span>
        </Link>
      </CustomTooltip>
    </div>
  );
};
