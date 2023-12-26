import { EAlbumKeys, TAlbum } from '@/types/album';
import { TArtist } from '@/types/artist';
import { TSongItem } from '@/types/components';
import { TMusicTrack } from '@/types/music-track';

export type TArtistSection = {
  artists: TArtist[];
};

export type TLoveAlbumsSection = {
  albums: TAlbum[];
};

export type TLoveSongsSection = { songs: TMusicTrack[] };

export type TLoveSongsSectionItem = {
  song: TMusicTrack;
  isPlaying: boolean;
  isActive: boolean;
};

export type TMainContent = {
  songs: TMusicTrack[];
  albums: TAlbum[];
  artists: TArtist[];
};

export type TUseLandingPageProps = TMainContent;

export type TUseLoveSongsSectionProps = {
  isPlaying: boolean;
  currentPlayedSong: TSongItem;
  handleOnClick: (songItem: TSongItem) => void;
};

export type TAlbumItem = Pick<
  TAlbum,
  | EAlbumKeys.COLLECTION_ID
  | EAlbumKeys.COLLECTION_NAME
  | EAlbumKeys.ARTWORK_URL_60
  | EAlbumKeys.ARTIST_NAME
  | EAlbumKeys.RELEASE_DATE
>;

export type TLoveAlbumsSectionItem = {
  album: TAlbumItem;
  isPlaying: boolean;
  isActive: boolean;
};

export type TUseLoveSongsItemContextMenu = {
  song: TMusicTrack;
  copytoClipboard: (text: string) => void;
};
