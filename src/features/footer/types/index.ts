import { ChangeEvent, Dispatch, RefObject, SyntheticEvent } from 'react';

import { TSongItem } from '@/types/store';

export type TMusicPlayerContext = {
  ref: RefObject<HTMLAudioElement>;
  isShuffle: boolean;
  isLoop: boolean;
  setIsShuffle: Dispatch<React.SetStateAction<boolean>>;
  setIsLoop: Dispatch<React.SetStateAction<boolean>>;
};

export type TProgressBar = {
  value: number;
  minValue: number;
  maxValue: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleStartChange?: () => void;
  handleEndChange?: () => void;
};

export const enum ETextAlign {
  START,
  END,
}

export type TDuration = {
  seconds: number;
  textAlign?: ETextAlign;
  disabled?: boolean;
  isReversedTime?: boolean;
  onClick?: () => void;
};

export type TUseIsTextOverflowing = {
  currentSong: TSongItem;
};

export type TUseIsTextOverflowingProps = {
  ref: RefObject<HTMLDivElement>;
  isTextOverflowing: boolean;
};

export type TAudio = {
  setCurrentTime: Dispatch<React.SetStateAction<number>>;
};

export type TUseAudio = TAudio;

export type TUseAudioProps = {
  ref: RefObject<HTMLAudioElement>;
  currentSong: TSongItem;
  isPlaying: boolean;
  isLoop: boolean;
  onLoadedMetadata: ({ target }: SyntheticEvent<HTMLAudioElement>) => void;
  onTimeUpdate: ({ target }: SyntheticEvent<HTMLAudioElement>) => void;
  onEnded: () => void;
};

export type TUsePlayerButtonsProps = {
  isPlaying: boolean;
};
