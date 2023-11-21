'use client';

import { CustomSection, CustomSectionItem, MusicTrackInformations } from '@/shared/components';
import { MusicTrack } from '@/shared/interfaces/music-track';

const LoveSongsSection = ({ songs }: { songs: MusicTrack[] }) => (
  <CustomSection title='Love songs' redirectionUrl='/love-songs'>
    {
      <ul className='custom-section__items'>
        {songs.map(({ trackId, artworkUrl60, trackName, artistName, collectionName }) => (
          <li key={trackId}>
            <CustomSectionItem
              collectionName={collectionName}
              imageUrl={artworkUrl60}
              onClick={() => {
                // TODO - add play song action
              }}
            >
              <MusicTrackInformations trackName={trackName} artistName={artistName} />
            </CustomSectionItem>
          </li>
        ))}
      </ul>
    }
  </CustomSection>
);

export default LoveSongsSection;
