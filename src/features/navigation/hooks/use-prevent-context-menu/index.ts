import { useCallback, useEffect } from 'react';

export const usePreventContextMenu = (): void => {
  const preventContextMenu = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    document.body.addEventListener('contextmenu', preventContextMenu);

    return () => {
      document.body.removeEventListener('contextmenu', preventContextMenu);
    };
  }, [preventContextMenu]);
};
