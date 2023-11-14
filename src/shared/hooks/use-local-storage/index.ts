import { useState, useCallback, useEffect } from 'react';

type useLocalStorageProps = {
  key: string;
  defaultValue: string;
};

export const useLocalStorage = ({ key, defaultValue }: useLocalStorageProps) => {
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
