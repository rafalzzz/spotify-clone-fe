'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { CustomAddToFavoriteButton } from '@/components/custom-add-to-favorite-button';
import { CustomContextMenu } from '@/components/custom-context-menu';
import { CustomTooltip } from '@/components/custom-tooltip';

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useCurrentSong } from '@/hooks/use-current-song';
import { useSongContextMenu } from '@/hooks/use-song-context-menu';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';
import { generateTrackRedirectionPath } from '@/utils/generate-track-redirection-path';

import { EMusicTrackKeys } from '@/types/music-track';

import './NowPlayedTrack.scss';

export const NowPlayedTrack = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const currentSong = useCurrentSong();
  const ref = useRef<HTMLAnchorElement>(null);

  const { contextHolder, copytoClipboard } = useCopyToClipboard();
  const items = useSongContextMenu({ song: currentSong, copytoClipboard });

  const onClick = () => {
    console.log('click');
  };

  const onOpenChange = (open: boolean) => {
    setIsMenuOpen(open);
  };

  const onMouseEnter = () => {
    setIsMouseOver(true);
  };

  const onMouseLeave = () => {
    setIsMouseOver(false);
  };

  if (!currentSong) {
    return <div className='now-played-track' data-testid='now-played-track' />;
  }

  return (
    <div className='now-played-track' data-testid='now-played-track'>
      {contextHolder}
      <Image
        src={currentSong?.[EMusicTrackKeys.ARTWORK_URL_60]}
        width={56}
        height={56}
        alt='image'
        loading='lazy'
        decoding='async'
      />
      <div className='now-played-track__informations'>
        <CustomTooltip
          title={currentSong?.[EMusicTrackKeys.TRACK_NAME]}
          open={isMouseOver && !isMenuOpen}
          placement='top'
          testId='music-track-informations-track-name-tooltip'
        >
          <Link
            ref={ref}
            href={generateTrackRedirectionPath(currentSong?.[EMusicTrackKeys.ARTIST_ID])}
            className='now-played-track__title'
            data-testid='now-played-track-title-redirection'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <CustomContextMenu items={items} onOpenChange={onOpenChange}>
              <span data-testid='now-played-track-title-text'>
                {currentSong?.[EMusicTrackKeys.TRACK_NAME]}
              </span>
            </CustomContextMenu>
          </Link>
        </CustomTooltip>
        <Link
          href={generateArtistRedirectionPath(currentSong?.[EMusicTrackKeys.ARTIST_ID])}
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
