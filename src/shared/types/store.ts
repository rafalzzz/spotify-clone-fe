import { TSongItem } from './components';

export type TPlaySongAction = { trackId: number; songs: TSongItem[] };
export type TPlayAlbumAction = { albumId: number; songs: TSongItem[] };

export type TUseMusicPlayerStore = {
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  activeIndex: number;
  songsList: TSongItem[];
  trackId: null | number;
  albumId: null | number;
  togglePlay: () => void;
  setDuration: (duration: number) => void;
  setCurrentTime: (duration: number) => void;
  setActiveIndex: (time: number) => void;
  playSong: ({ trackId, songs }: TPlaySongAction) => void;
  playAlbum: ({ albumId, songs }: TPlayAlbumAction) => void;
};

export type TUseSectionStore = {
  isResizing: boolean;
  itemsAmount: number | null;
  enableResizing: () => void;
  disableResizing: () => void;
  setItemsAmount: (itemsAmount: number) => void;
};
