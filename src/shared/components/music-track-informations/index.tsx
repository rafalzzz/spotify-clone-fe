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
      <CustomTooltip title={trackName}>
        <h4 className='music-track-informations__text'>{trackName}</h4>
      </CustomTooltip>
      <CustomTooltip title={mainArtist}>
        <h5 className='music-track-informations__text music-track-informations__artist'>
          {mainArtist}
        </h5>
      </CustomTooltip>
    </div>
  );
};
