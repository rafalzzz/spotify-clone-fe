import { useState, useCallback, useEffect, RefObject } from 'react';

import { useLocalStorage } from '@/hooks/use-local-storage';

type useResizeSidebarProps = {
  sidebarRef: RefObject<HTMLDivElement>;
};

const SIDEBAR_WIDTH_KEY = 'sidebar-width';
const DEFAULT_WIDTH = '200';
const SIDEBAR_MIN_WIDTH = 150;
const SIDEBAR_MAX_WIDTH = 300;

export const useResizeSidebar = ({ sidebarRef }: useResizeSidebarProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const { value: sidebarWidth, setValue: setSidebarWidth } = useLocalStorage({
    key: SIDEBAR_WIDTH_KEY,
    defaultValue: localStorage?.getItem(SIDEBAR_WIDTH_KEY) ?? DEFAULT_WIDTH,
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
        let width =
          mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left ?? DEFAULT_WIDTH;

        if (width < SIDEBAR_MIN_WIDTH) {
          width = SIDEBAR_MIN_WIDTH;
        }
        
        if (width > SIDEBAR_MAX_WIDTH) {
          width = SIDEBAR_MAX_WIDTH;
        }

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
