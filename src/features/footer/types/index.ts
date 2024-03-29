import { ChangeEvent, RefObject, SyntheticEvent } from 'react';

import { TSongItem } from '@/types/components';

export type TMusicPlayerContext = {
  ref: RefObject<HTMLAudioElement>;
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

export type TUseIsTextTruncated = {
  ref: RefObject<HTMLElement>;
};

export type TUseIsTextTruncatedProps = boolean;

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

export type TUseMusicProgressBarProps = {
  duration: number;
  currentTime: number;
  temporaryTime: number | null;
  durationValue: number;
  isReversedTime: boolean;
  handleStartChange: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEndChange: () => void;
  onClick: () => void;
};

export type TUseSoundProgressBar = {
  isMuted: boolean;
  volume: number;
  toggleMuted: () => void;
  handleChange: ({ target: { valueAsNumber } }: ChangeEvent<HTMLInputElement>) => void;
};

export type TUseMusicTrackTitleTooltipProps = {
  isMenuOpen: boolean;
  isMouseOver: boolean;
  onOpenChange: (open: boolean) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};
