'use client';
import { useCallback, useMemo } from 'react';

import { TLoveSongsSection } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';

import { EMusicTrackKeys } from '@/types/music-track';
import { TSongItem } from '@/types/store';

import { CustomSection, CustomSectionItem, MusicTrackInformation } from '@/shared/components';

export const LoveSongsSection = ({ songs }: TLoveSongsSection): JSX.Element => {
  const { isPlaying, activeIndex, songsList, changeSong, togglePlay } = useMusicPlayerStore();

  const currentPlayedSong = useMemo(() => songsList[activeIndex], [activeIndex, songsList]);

  const handleOnClick = useCallback(
    (songItem: TSongItem) => {
      const trackIsAlreadyPlayed =
        songItem[EMusicTrackKeys.PREVIEW_URL] === currentPlayedSong?.[EMusicTrackKeys.PREVIEW_URL];

      if (trackIsAlreadyPlayed) {
        return togglePlay();
      }

      changeSong({ activeIndex: 0, songs: [songItem] });
    },
    [currentPlayedSong, changeSong, togglePlay],
  );

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
