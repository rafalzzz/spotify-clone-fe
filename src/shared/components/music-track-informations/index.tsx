import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';
import { getMainArtist } from '@/utils/get-main-artist';

import { TMusicTrackInformationProps } from '@/types/components';

import { CustomTooltip } from '../custom-tooltip';

import './MusicTrackInformation.scss';

export const MusicTrackInformation: FC<TMusicTrackInformationProps> = ({
  trackName,
  artistName,
}): JSX.Element => {
  const router = useRouter();
  const mainArtist = getMainArtist(artistName);

  const handleArtistClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const path = generateArtistRedirectionPath(mainArtist);
    router.push(path);
  };

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
      <button
        className='music-track-informations__text music-track-informations__artist'
        data-testid='music-track-informations-artist-name'
        onClick={handleArtistClick}
      >
        <CustomTooltip title={mainArtist} testId='music-track-informations-artist-name-tooltip'>
          <span>{mainArtist}</span>
        </CustomTooltip>
      </button>
    </div>
  );
};
