import { ChangeEvent, Dispatch, RefObject, SyntheticEvent } from 'react';

import { TSongItem } from '@/types/store';

export type TMusicPlayerContext = {
  ref: RefObject<HTMLAudioElement>;
  currentTime: number;
  isShuffle: boolean;
  isLoop: boolean;
  setCurrentTime: Dispatch<React.SetStateAction<number>>;
  setIsShuffle: Dispatch<React.SetStateAction<boolean>>;
  setIsLoop: Dispatch<React.SetStateAction<boolean>>;
};

export type TProgressBar = {
  value: number;
  minValue: number;
  maxValue: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type TDuration = { seconds: number };

export type TUseIsTextOverflowing = {
  currentSong: TSongItem;
};

export type TUseIsTextOverflowingProps = {
  ref: RefObject<HTMLDivElement>;
  isTextOverflowing: boolean;
};

export type TUseAudioProps = {
  ref: RefObject<HTMLAudioElement>;
  currentSong: TSongItem;
  isPlaying: boolean;
  onLoadedMetadata: ({ target }: SyntheticEvent<HTMLAudioElement>) => void;
  onTimeUpdate: ({ target }: SyntheticEvent<HTMLAudioElement>) => void;
  onEnded: () => void;
};

export type TUsePlayerButtonsProps = {
  isPlaying: boolean;
};
