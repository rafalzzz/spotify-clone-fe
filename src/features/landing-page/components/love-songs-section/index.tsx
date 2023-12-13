'use client';

import { useCallback } from 'react';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomSection, CustomSectionItem, MusicTrackInformation } from '@/shared/components';
import { MusicTrack } from '@/shared/interfaces/music-track';

export const LoveSongsSection = ({ songs }: { songs: MusicTrack[] }) => {
  const { isPlaying, currentTrackUrl, changeSong, togglePlay } = useMusicPlayerStore();

  const handleOnClick = useCallback(
    (previewUrl: string) => {
      const trackIsAlreadyPlaying = previewUrl === currentTrackUrl;
      console.log({ trackIsAlreadyPlaying });
      if (trackIsAlreadyPlaying) {
        return togglePlay();
      }

      changeSong(previewUrl);
    },
    [currentTrackUrl, changeSong, togglePlay],
  );

  return (
    <CustomSection title='Love songs' redirectionUrl='/love-songs'>
      {
        <ul className='custom-section__items'>
          {songs.map(
            ({ trackId, artworkUrl60, trackName, artistName, collectionName, previewUrl }) => (
              <li key={trackId}>
                <CustomSectionItem
                  collectionName={collectionName}
                  imageUrl={artworkUrl60}
                  isActive={isPlaying && previewUrl === currentTrackUrl}
                  onClick={() => {
                    handleOnClick(previewUrl);
                  }}
                >
                  <MusicTrackInformation trackName={trackName} artistName={artistName} />
                </CustomSectionItem>
              </li>
            ),
          )}
        </ul>
      }
    </CustomSection>
  );
};
