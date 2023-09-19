'use client';
import { useState, useCallback, useEffect, RefObject } from 'react';

import { useLocalStorage } from '@/hooks/use-local-storage';

type useResizeSidebarProps = {
  sidebarRef: RefObject<HTMLDivElement>;
};

const SIDEBAR_WIDTH_KEY = 'sidebar-width';
const SAVED_WIDTH = localStorage.getItem(SIDEBAR_WIDTH_KEY);
const DEFAULT_WIDTH = 200;

export const useResizeSidebar = ({ sidebarRef }: useResizeSidebarProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useLocalStorage({
    key: SIDEBAR_WIDTH_KEY,
    defaultValue: SAVED_WIDTH || DEFAULT_WIDTH,
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
        setSidebarWidth(mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left);
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
