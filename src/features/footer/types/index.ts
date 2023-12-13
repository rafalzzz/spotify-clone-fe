import { ChangeEvent, Dispatch, RefObject } from 'react';

export type TUsePlayerButtonsProps = {
  isPlaying: boolean;
};

export type TMusicPlayerContext = {
  ref: RefObject<HTMLAudioElement>;
  currentTime: number;
  setCurrentTime: Dispatch<React.SetStateAction<number>>;
};

export type TProgressBar = {
  value: number;
  minValue: number;
  maxValue: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type TDuration = { seconds: number };
