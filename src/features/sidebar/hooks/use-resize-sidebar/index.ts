import { useState, useCallback, useEffect, RefObject } from 'react';

import { useLocalStorage } from '@/hooks/use-local-storage';

import { isWindowDefined } from '@/utils/is-window-defined';

import SIDEBAR_SETTINGS from '@/configs/sidebar-settings';

const { DEFAULT_WIDTH, SIDEBAR_MIN_WIDTH, SIDEBAR_MAX_WIDTH, SIDEBAR_WIDTH_KEY } = SIDEBAR_SETTINGS;

type useResizeSidebarProps = {
  sidebarRef: RefObject<HTMLDivElement>;
};

export const useResizeSidebar = ({ sidebarRef }: useResizeSidebarProps) => {
  const [isResizing, setIsResizing] = useState(false);

  const defaultValue = isWindowDefined()
    ? localStorage.getItem(SIDEBAR_WIDTH_KEY) ?? DEFAULT_WIDTH
    : DEFAULT_WIDTH;

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
