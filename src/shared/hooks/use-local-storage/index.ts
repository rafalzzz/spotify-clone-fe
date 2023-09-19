import { useState, useEffect } from 'react';

type useLocalStorageProps = {
  key: string;
  defaultValue: string | number;
};

export const useLocalStorage = ({ key, defaultValue }: useLocalStorageProps) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
