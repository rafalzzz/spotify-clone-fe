import { useState, useCallback, useEffect } from 'react';

import { TUseLocalStorage, TUseLocalStorageProps } from '@/types/hooks';

export const useLocalStorage = ({ key, defaultValue }: TUseLocalStorage): TUseLocalStorageProps => {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const isLocalStorageAvailable = typeof window !== 'undefined';

  const setValue = useCallback(
    (value: string) => {
      setCurrentValue(value);

      if (isLocalStorageAvailable) {
        localStorage.setItem(key, value);
      }
    },
    [key, isLocalStorageAvailable],
  );

  const getSavedValue = useCallback(() => {
    if (isLocalStorageAvailable) {
      const savedValue = localStorage.getItem(key);
      if (savedValue) setCurrentValue(savedValue);
    }
  }, [key, isLocalStorageAvailable]);

  useEffect(getSavedValue, [getSavedValue]);

  return { value: currentValue, setValue };
};
