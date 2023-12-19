import { RefObject } from 'react';

export type TUseResizeSidebar = {
  sidebarRef: RefObject<HTMLDivElement>;
};

export type TUseResizeSidebarProps = {
  sidebarWidth: string;
  startResizing: () => void;
};
