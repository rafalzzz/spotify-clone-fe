'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CustomAddToFavoriteButton } from '@/components/custom-add-to-favorite-button';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import './NowPlayedTrack.scss';

export const NowPlayedTrack = () => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <div className='now-played-track'>
      <Image
        src={
          'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2c/b0/de/2cb0de7b-4559-d885-36f8-271c950cba34/886443562097.jpg/60x60bb.jpg'
        }
        width={56}
        height={56}
        alt='image'
        loading='lazy'
        decoding='async'
      />
      <div className='now-played-track__informations'>
        <div className='now-played-track__title-container'>
          <span className='now-played-track__title'>Just give me a reason and one one more...</span>
        </div>
        <Link
          href={generateArtistRedirectionPath('P!nk')}
          className='now-played-track__artist'
          data-testid='now-played-track-artist-redirection'
        >
          P!nk
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
