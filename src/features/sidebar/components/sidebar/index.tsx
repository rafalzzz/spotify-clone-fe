'use client';
import { useRef } from 'react';

import './Sidebar.scss';
import { useResizeSidebar } from '@/sidebar/hooks/use-resize-sidebar';

export const Sidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { sidebarWidth, startResizing } = useResizeSidebar({ sidebarRef });

  return (
    <div
      ref={sidebarRef}
      className='sidebar'
      style={{ width: `${sidebarWidth}px` }}
      onMouseDown={(e) => e.preventDefault()}
      data-testid='sidebar'
    >
      <div className='sidebar__content'>test</div>
      <div className='sidebar__resizer' onMouseDown={startResizing} data-testid='resizer' />
    </div>
  );
};
