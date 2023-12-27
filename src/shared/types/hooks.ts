import { JSXElementConstructor, ReactElement, RefObject } from 'react';
import { UseQueryResult } from 'react-query';

import { TAlbum } from './album';
import { TSongItem } from './components';
import { TMusicTrack } from './music-track';

export type TUseDisplayErrorProps = {
  displayError: (description: string) => void;
  contextHolder: ReactElement<string, string | JSXElementConstructor<string>>;
};

export type TUseLocalStorage = {
  key: string;
  defaultValue: string;
};

export type TUseLocalStorageProps = {
  value: string;
  setValue: (value: string) => void;
};

export type TUseCustomSongPlayButtonProps = {
  isPlaying: boolean;
  currentPlayedSong: TSongItem;
  handleOnClick: (songItem: TSongItem) => void;
};

export type TUseGetAlbumSongs = {
  albumId: number;
  onSuccess?: (data: TSongItem[]) => void;
};

export type TUseGetAlbumSongsProps = {
  cachedData?: TSongItem[];
  fetchAlbumSongsAction: UseQueryResult<TSongItem[], unknown>;
};

export type TUseCopyToClipboard = {
  copytoClipboard: (text: string) => void;
  contextHolder: ReactElement<string, string | JSXElementConstructor<string>>;
};

export type TUseSongContextMenu = {
  song: TMusicTrack | TSongItem;
  copytoClipboard: (text: string) => void;
};

export type TUseAlbumContextMenu = {
  album: TAlbum;
  copytoClipboard: (text: string) => void;
};

export type TUseArtistContextMenu = {
  artistId?: number;
  copytoClipboard: (text: string) => void;
};

export type TUseClickOutside = {
  ref: RefObject<HTMLElement>;
  onClickOutside: () => void;
};
