import { useState, useCallback, useEffect } from 'react';

type useLocalStorageProps = {
  key: string;
  defaultValue: string;
};

export const useLocalStorage = ({ key, defaultValue }: useLocalStorageProps) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const setValue = useCallback(
    (value: string) => {
      setCurrentValue(value);
      localStorage.setItem(key, value);
    },
    [key],
  );

  useEffect(() => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) setCurrentValue(savedValue);
  }, [key]);

  return { value: currentValue, setValue };
};
