import { useState, useCallback, useEffect } from 'react';

import { TUseResizeSidebarProps } from '@/sidebar/types';

import { useLocalStorage } from '@/hooks/use-local-storage';

import SIDEBAR_SETTINGS from '@/configs/sidebar-settings';

const { DEFAULT_WIDTH, SIDEBAR_MIN_WIDTH, SIDEBAR_MAX_WIDTH, SIDEBAR_WIDTH_KEY } = SIDEBAR_SETTINGS;

export const useResizeSidebar = ({ sidebarRef }: TUseResizeSidebarProps) => {
  const [isResizing, setIsResizing] = useState(false);

  const defaultValue = localStorage.getItem(SIDEBAR_WIDTH_KEY) ?? DEFAULT_WIDTH;

  const { value: sidebarWidth, setValue: setSidebarWidth } = useLocalStorage({
    key: SIDEBAR_WIDTH_KEY,
    defaultValue: defaultValue as string,
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
