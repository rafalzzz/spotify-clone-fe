import { Dispatch, ReactNode, RefObject } from 'react';

import { Album } from '@/interfaces/album';
import { Artist } from '@/interfaces/artist';
import { MusicTrack } from '@/interfaces/music-track';

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
