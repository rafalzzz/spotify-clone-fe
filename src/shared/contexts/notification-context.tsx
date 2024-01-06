'use client';
import React, { createContext, useMemo, useContext, FC, PropsWithChildren } from 'react';

import { TNotificationContext } from '@/types/contexts';

const NofiticationContext = createContext<TNotificationContext | undefined>(undefined);

export const NotificationContextProvider: FC<PropsWithChildren<TNotificationContext>> = ({
  children,
  api,
}) => {
  const memoizedValue = useMemo(
    () => ({
      api,
    }),
    [api],
  );

  return (
    <NofiticationContext.Provider value={memoizedValue}>{children}</NofiticationContext.Provider>
  );
};

export const useNotificationContext = (): TNotificationContext => {
  const ctx = useContext(NofiticationContext);
  if (ctx === undefined) {
    throw new Error('useNotificationContext must be used within a NotificationContextProvider');
  }

  return ctx;
};
