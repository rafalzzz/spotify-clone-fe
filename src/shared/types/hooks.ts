import { JSXElementConstructor, ReactElement } from 'react';

import { TSongItem } from './store';

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
