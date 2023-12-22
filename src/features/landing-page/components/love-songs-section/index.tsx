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
  const trackId = useMusicPlayerStore(({ trackId }) => trackId);

  const isResizing = useSectionStore(({ isResizing }) => isResizing);
  const itemsAmount = useSectionStore(({ itemsAmount }) => itemsAmount);

  return (
    <CustomSection title='Love songs' redirectionUrl='/love-songs'>
      {
        <ul className='custom-section__items'>
          {songs.map((song, index) => {
            const sectionItem = (
              <LoveSongsSectionItem
                key={song[EMusicTrackKeys.TRACK_ID]}
                song={song}
                isActive={song[EMusicTrackKeys.TRACK_ID] === trackId}
                isPlaying={song[EMusicTrackKeys.TRACK_ID] === trackId && isPlaying}
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
