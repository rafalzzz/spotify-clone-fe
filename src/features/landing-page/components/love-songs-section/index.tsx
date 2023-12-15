'use client';
import { FC } from 'react';

import { TLoveSongsSection } from '@/landing-page/types/types';

import { EMusicTrackKeys } from '@/types/music-track';

import {
  CustomSection,
  CustomSectionItem,
  CustomSectionItemImage,
  CustomSongPlayButton,
  MusicTrackInformation,
} from '@/shared/components';

export const LoveSongsSection: FC<TLoveSongsSection> = ({ songs }): JSX.Element => (
  <CustomSection title='Love songs' redirectionUrl='/love-songs'>
    {
      <ul className='custom-section__items'>
        {songs.map((song) => (
          <li key={song[EMusicTrackKeys.TRACK_ID]}>
            <CustomSectionItem collectionName={song[EMusicTrackKeys.COLLECTION_NAME]}>
              <>
                <CustomSectionItemImage imageUrl={song[EMusicTrackKeys.ARTWORK_URL_60]}>
                  <CustomSongPlayButton song={song} />
                </CustomSectionItemImage>
                <MusicTrackInformation
                  trackName={song[EMusicTrackKeys.TRACK_NAME]}
                  artistName={song[EMusicTrackKeys.ARTIST_NAME]}
                />
              </>
            </CustomSectionItem>
          </li>
        ))}
      </ul>
    }
  </CustomSection>
);
