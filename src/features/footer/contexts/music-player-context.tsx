'use client';
import React, { createContext, useMemo, useContext, useRef, PropsWithChildren, FC } from 'react';

import { TMusicPlayerContext } from '../types';

const MusicPlayerContext = createContext<TMusicPlayerContext | undefined>(undefined);

export const MusicPlayerContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLAudioElement>(null);

  const memoizedValue = useMemo(
    () => ({
      ref,
    }),
    [],
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
