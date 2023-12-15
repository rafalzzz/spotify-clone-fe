'use client';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

import './Sidebar.scss';

import { useResizeSidebar } from '@/sidebar/hooks/use-resize-sidebar';

import { SidebarNavigation } from '../sidebar-navigation';

const Sidebar = (): JSX.Element => {
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
      <SidebarNavigation />
      <div className='sidebar__resizer' onMouseDown={startResizing} data-testid='resizer' />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });
