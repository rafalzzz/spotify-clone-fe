'use client';
import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useRef,
  PropsWithChildren,
  FC,
} from 'react';

import { TMusicPlayerContext } from '../types';

const MusicPlayerContext = createContext<TMusicPlayerContext | undefined>(undefined);

export const MusicPlayerContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  const ref = useRef<HTMLAudioElement>(null);

  const memoizedValue = useMemo(
    () => ({
      ref,
      currentTime,
      isShuffle,
      isLoop,
      setIsShuffle,
      setIsLoop,
      setCurrentTime,
    }),
    [currentTime, isLoop, isShuffle],
  );

  return (
    <MusicPlayerContext.Provider value={memoizedValue}>{children}</MusicPlayerContext.Provider>
  );
};

export const useMusicPlayerContext = (): TMusicPlayerContext => {
  const ctx = useContext(MusicPlayerContext);
  if (ctx === undefined) {
    throw new Error('useMusicPlayerContext must be used within a MusicPlayerContextProvider');
  }

  return ctx;
};
