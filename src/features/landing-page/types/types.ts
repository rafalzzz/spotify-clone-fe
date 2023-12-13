import { TAlbum } from '@/types/album';
import { TArtist } from '@/types/artist';
import { TMusicTrack } from '@/types/music-track';

export type TArtistSection = {
  artists: TArtist[];
};

export type TLoveAlbumsSection = {
  albums: TAlbum[];
};

export type TLoveSongsSection = { songs: TMusicTrack[] };

export type TMainContent = {
  songs: TMusicTrack[];
  albums: TAlbum[];
  artists: TArtist[];
};

export type TUseLandingPageProps = TMainContent;
