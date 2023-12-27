import { useCallback, useEffect } from 'react';

import { TUseClickOutside } from '@/types/hooks';

export const useClickOutside = ({ ref, onClickOutside }: TUseClickOutside): void => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    },
    [onClickOutside, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside, handleClickOutside]);
};
