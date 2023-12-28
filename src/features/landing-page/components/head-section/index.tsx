'use client';
import Head from 'next/head';
import { FC, PropsWithChildren, useEffect } from 'react';

import { useMusicPlayerStore } from '@/store/music-player';

import { useCurrentSong } from '@/hooks/use-current-song';

import { EMusicTrackKeys } from '@/types/music-track';

import GLOBAL_SETTINGS from '@/configs/global';

export const HeadSection: FC<PropsWithChildren> = (): JSX.Element => {
  const currentSong = useCurrentSong();
  const isPlaying = useMusicPlayerStore(({ isPlaying }) => isPlaying);

  const trackName = currentSong?.[EMusicTrackKeys.TRACK_NAME];
  const artist = currentSong?.[EMusicTrackKeys.ARTIST_NAME];
  const title =
    isPlaying && trackName && artist ? `${trackName} • ${artist}` : GLOBAL_SETTINGS.DEFAULT_TITLE;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
