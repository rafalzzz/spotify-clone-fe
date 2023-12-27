'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { useMusicTrackTitleTooltips } from '@/footer/hooks/use-now-played-track-events';

import { CustomAddToFavoriteButton } from '@/components/custom-add-to-favorite-button';
import { CustomContextMenu } from '@/components/custom-context-menu';
import { CustomTooltip } from '@/components/custom-tooltip';

import { useArtistContextMenu } from '@/hooks/use-artist-context-menu';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useCurrentSong } from '@/hooks/use-current-song';
import { useSongContextMenu } from '@/hooks/use-song-context-menu';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';
import { generateTrackRedirectionPath } from '@/utils/generate-track-redirection-path';

import { EMusicTrackKeys } from '@/types/music-track';

import './NowPlayedTrack.scss';

export const NowPlayedTrack = (): JSX.Element => {
  const currentSong = useCurrentSong();
  const ref = useRef<HTMLAnchorElement>(null);

  const { contextHolder, copytoClipboard } = useCopyToClipboard();
  const songMenuItems = useSongContextMenu({ song: currentSong, copytoClipboard });

  const artistMenuItems = useArtistContextMenu({
    artistId: currentSong?.[EMusicTrackKeys.ARTIST_ID],
    copytoClipboard,
  });

  const { isMenuOpen, isMouseOver, onOpenChange, onMouseEnter, onMouseLeave } =
    useMusicTrackTitleTooltips();

  const onClick = () => {
    console.log('click');
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
          testId='now-played-track-track-name-tooltip'
        >
          <Link
            ref={ref}
            href={generateTrackRedirectionPath(currentSong?.[EMusicTrackKeys.ARTIST_ID])}
            className='now-played-track__title'
            data-testid='now-played-track-title-redirection'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <CustomContextMenu items={songMenuItems} onOpenChange={onOpenChange}>
              <div data-testid='now-played-track-title-text'>
                {currentSong?.[EMusicTrackKeys.TRACK_NAME]}
              </div>
            </CustomContextMenu>
          </Link>
        </CustomTooltip>
        <CustomContextMenu items={artistMenuItems} onOpenChange={onOpenChange}>
          <Link
            href={generateArtistRedirectionPath(currentSong?.[EMusicTrackKeys.ARTIST_ID])}
            className='now-played-track__artist'
            data-testid='now-played-track-artist-redirection'
          >
            {currentSong?.[EMusicTrackKeys.ARTIST_NAME]}
          </Link>
        </CustomContextMenu>
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
