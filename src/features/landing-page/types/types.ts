import { TAlbum } from '@/types/album';
import { TArtist } from '@/types/artist';
import { EMusicTrackKeys, TMusicTrack } from '@/types/music-track';
import { TSongItem } from '@/types/store';

export type TArtistSection = {
  artists: TArtist[];
};

export type TLoveAlbumsSection = {
  albums: TAlbum[];
};

export type TLoveSongsSection = { songs: TMusicTrack[] };

export type TLoveSongsSectionItem = {
  song: Pick<
    TMusicTrack,
    | EMusicTrackKeys.TRACK_ID
    | EMusicTrackKeys.COLLECTION_NAME
    | EMusicTrackKeys.ARTWORK_URL_60
    | EMusicTrackKeys.ARTIST_NAME
    | EMusicTrackKeys.TRACK_NAME
    | EMusicTrackKeys.PREVIEW_URL
  >;
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
