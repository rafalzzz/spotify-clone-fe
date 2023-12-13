import { EMusicTrackKeys, TMusicTrack } from './music-track';

export type TSongItem = Pick<
  TMusicTrack,
  | EMusicTrackKeys.ARTIST_NAME
  | EMusicTrackKeys.TRACK_NAME
  | EMusicTrackKeys.PREVIEW_URL
  | EMusicTrackKeys.ARTWORK_URL_60
>;

export type TChangeSongAction = { activeIndex: number; songs: TSongItem[] };

export type TUseMusicPlayerStore = {
  isPlaying: boolean;
  duration: number;
  activeIndex: number;
  songsList: TSongItem[];
  changeSong: ({ activeIndex, songs }: TChangeSongAction) => void;
  togglePlay: () => void;
  setDuration: (duration: number) => void;
};
