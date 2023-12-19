'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { useIsTextOverflowing } from '@/footer/hooks/use-is-text-overflowing';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomAddToFavoriteButton } from '@/components/custom-add-to-favorite-button';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { EMusicTrackKeys } from '@/types/music-track';

import './NowPlayedTrack.scss';

export const NowPlayedTrack = (): JSX.Element => {
  const activeIndex = useMusicPlayerStore(({ activeIndex }) => activeIndex);
  const songsList = useMusicPlayerStore(({ songsList }) => songsList);

  const currentSong = useMemo(() => songsList[activeIndex], [activeIndex, songsList]);

  const { ref, isTextOverflowing } = useIsTextOverflowing({ currentSong });

  const onClick = () => {
    console.log('click');
  };

  if (!currentSong) {
    return <div className='now-played-track' data-testid='now-played-track' />;
  }

  return (
    <div className='now-played-track' data-testid='now-played-track'>
      <Image
        src={currentSong?.[EMusicTrackKeys.ARTWORK_URL_60]}
        width={56}
        height={56}
        alt='image'
        loading='lazy'
        decoding='async'
      />
      <div className='now-played-track__informations'>
        <div
          className={`now-played-track__title-container ${
            isTextOverflowing ? 'now-played-track__title-container--overflow' : ''
          }`}
          data-testid='now-played-track-title-container'
        >
          <span ref={ref} className='now-played-track__title' data-testid='now-played-track-title'>
            {currentSong?.[EMusicTrackKeys.TRACK_NAME]}
          </span>
        </div>
        <Link
          href={generateArtistRedirectionPath(currentSong?.[EMusicTrackKeys.ARTIST_NAME])}
          className='now-played-track__artist'
          data-testid='now-played-track-artist-redirection'
        >
          {currentSong?.[EMusicTrackKeys.ARTIST_NAME]}
        </Link>
      </div>
      <div className='now-played-track__button'>
        <CustomAddToFavoriteButton
          title='Add to favorites'
          isAddedToFav={false}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
