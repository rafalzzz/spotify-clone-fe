import { useState, useCallback, useEffect, RefObject } from 'react';

import { useLocalStorage } from '@/hooks/use-local-storage';

type useResizeSidebarProps = {
  sidebarRef: RefObject<HTMLDivElement>;
};

const SIDEBAR_WIDTH_KEY = 'sidebar-width';
const DEFAULT_WIDTH = '200';

export const useResizeSidebar = ({ sidebarRef }: useResizeSidebarProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const { value: sidebarWidth, setValue: setSidebarWidth } = useLocalStorage({
    key: SIDEBAR_WIDTH_KEY,
    defaultValue: DEFAULT_WIDTH,
  });

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing && sidebarRef.current) {
        const width =
          mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left ?? DEFAULT_WIDTH;
        setSidebarWidth(String(width));
      }
    },
    [isResizing, sidebarRef, setSidebarWidth],
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return { sidebarWidth, startResizing };
};
