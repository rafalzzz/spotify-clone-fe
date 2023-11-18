import Link from 'next/link';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';
import { getMainArtist } from '@/utils/get-main-artist';

import { CustomTooltip } from '../custom-tooltip';

import './MusicTrackInformations.scss';

type MusicTrackInformationsProps = {
  trackName: string;
  artistName: string;
};

export const MusicTrackInformations = ({ trackName, artistName }: MusicTrackInformationsProps) => {
  const mainArtist = getMainArtist(artistName);

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
          href={generateArtistRedirectionPath(mainArtist)}
          className='music-track-informations__text music-track-informations__artist'
          data-testid='music-track-informations-artist-name'
        >
          <span>{mainArtist}</span>
        </Link>
      </CustomTooltip>
    </div>
  );
};
