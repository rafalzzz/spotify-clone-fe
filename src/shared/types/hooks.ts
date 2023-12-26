import { JSXElementConstructor, ReactElement } from 'react';
import { UseQueryResult } from 'react-query';

import { TSongItem } from './components';

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
