'use client';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { TUseHistoryProps } from '@/navigation/types';

export const useHistory = (): TUseHistoryProps => {
  const { back, forward } = useRouter();

  const undoHistory = useCallback(() => {
    back();
  }, [back]);

  const redoHistory = useCallback(() => {
    forward();
  }, [forward]);

  return { undoHistory, redoHistory };
};
