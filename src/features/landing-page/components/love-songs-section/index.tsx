'use client';
import { FC } from 'react';

import { TLoveSongsSection } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';
import { useSectionStore } from '@/store/section';

import { EMusicTrackKeys } from '@/types/music-track';

import { CustomSection } from '@/shared/components';

import { LoveSongsSectionItem } from '../love-songs-section-item';

export const LoveSongsSection: FC<TLoveSongsSection> = ({ songs }): JSX.Element => {
  const isPlaying = useMusicPlayerStore(({ isPlaying }) => isPlaying);
  const activeIndex = useMusicPlayerStore(({ activeIndex }) => activeIndex);
  const songsList = useMusicPlayerStore(({ songsList }) => songsList);

  const isResizing = useSectionStore(({ isResizing }) => isResizing);
  const itemsAmount = useSectionStore(({ itemsAmount }) => itemsAmount);

  const currentPlayedSong = songsList[activeIndex];

  return (
    <CustomSection title='Love songs' redirectionUrl='/love-songs'>
      {
        <ul className='custom-section__items'>
          {songs.map((song, index) => {
            const sectionItem = (
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
            );

            if (!isResizing && itemsAmount && index < itemsAmount) {
              return sectionItem;
            }

            return sectionItem;
          })}
        </ul>
      }
    </CustomSection>
  );
};
