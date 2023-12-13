'use client';
import { useLoveSongsSection } from '@/landing-page/hooks/use-love-songs-section';
import { TLoveSongsSection } from '@/landing-page/types/types';

import { EMusicTrackKeys } from '@/types/music-track';

import { CustomSection, CustomSectionItem, MusicTrackInformation } from '@/shared/components';

export const LoveSongsSection = ({ songs }: TLoveSongsSection): JSX.Element => {
  const { isPlaying, currentPlayedSong, handleOnClick } = useLoveSongsSection();

  return (
    <CustomSection title='Love songs' redirectionUrl='/love-songs'>
      {
        <ul className='custom-section__items'>
          {songs.map((song) => (
            <li key={song[EMusicTrackKeys.TRACK_ID]}>
              <CustomSectionItem
                collectionName={song[EMusicTrackKeys.COLLECTION_NAME]}
                imageUrl={song[EMusicTrackKeys.ARTWORK_URL_60]}
                isActive={
                  song[EMusicTrackKeys.PREVIEW_URL] ===
                  currentPlayedSong?.[EMusicTrackKeys.PREVIEW_URL]
                }
                isPlaying={isPlaying}
                onClick={() => {
                  handleOnClick({
                    artistName: song[EMusicTrackKeys.ARTIST_NAME],
                    trackName: song[EMusicTrackKeys.TRACK_NAME],
                    previewUrl: song[EMusicTrackKeys.PREVIEW_URL],
                    artworkUrl60: song[EMusicTrackKeys.ARTWORK_URL_60],
                  });
                }}
              >
                <MusicTrackInformation
                  trackName={song[EMusicTrackKeys.TRACK_NAME]}
                  artistName={song[EMusicTrackKeys.ARTIST_NAME]}
                />
              </CustomSectionItem>
            </li>
          ))}
        </ul>
      }
    </CustomSection>
  );
};
