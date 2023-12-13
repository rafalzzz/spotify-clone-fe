import { Dispatch, ReactNode, RefObject } from 'react';

import { Album } from '@/types/album';
import { Artist } from '@/types/artist';
import { MusicTrack } from '@/types/music-track';

export type TArtistSection = {
  artists: Artist[];
};

export type TLoveAlbumsSection = {
  albums: Album[];
};

export type TMainContent = {
  songs: MusicTrack[];
  albums: Album[];
  artists: Artist[];
};

export type TUseLandingPageProps = TMainContent;
