'use client';
import { FC } from 'react';

import { TLoveSongsSection } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';

import { EMusicTrackKeys } from '@/types/music-track';

import { CustomSection } from '@/shared/components';

import { LoveSongsSectionItem } from '../love-songs-section-item';

export const LoveSongsSection: FC<TLoveSongsSection> = ({ songs }): JSX.Element => {
  const isPlaying = useMusicPlayerStore(({ isPlaying }) => isPlaying);
  const { activeIndex, songsList } = useMusicPlayerStore();
  const currentPlayedSong = songsList[activeIndex];

  return (
    <CustomSection title='Love songs' redirectionUrl='/love-songs'>
      {
        <ul className='custom-section__items'>
          {songs.map((song) => (
            <LoveSongsSectionItem
              key={song[EMusicTrackKeys.TRACK_ID]}
              song={song}
              isActive={
                song[EMusicTrackKeys.PREVIEW_URL] ===
                currentPlayedSong?.[EMusicTrackKeys.PREVIEW_URL]
              }
              isPlaying={
                song[EMusicTrackKeys.PREVIEW_URL] ===
                  currentPlayedSong?.[EMusicTrackKeys.PREVIEW_URL] && isPlaying
              }
            />
          ))}
        </ul>
      }
    </CustomSection>
  );
};
