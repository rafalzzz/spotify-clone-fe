'use client';

import { MusicTrack } from '@/types/music-track';

import { CustomSection, CustomSectionItem, MusicTrackInformations } from '@/shared/components';

export const LoveSongsSection = ({ songs }: { songs: MusicTrack[] }) => (
  <CustomSection title='Love songs' redirectionUrl='/love-songs'>
    {
      <ul className='custom-section__items'>
        {songs.map(({ trackId, artworkUrl100, trackName, artistName }) => (
          <li key={trackId}>
            <CustomSectionItem
              imageUrl={artworkUrl100}
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
