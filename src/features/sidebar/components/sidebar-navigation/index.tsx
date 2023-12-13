'use client';
import Link from 'next/link';

import { useSidebarNavigation } from '@/sidebar/hooks/use-sidebar-navigation';

import './SidebarNavigation.scss';

export const SidebarNavigation = (): JSX.Element => {
  const { sidebarNavigationItems } = useSidebarNavigation();

  return (
    <nav className='sidebar-navigation'>
      <ul>
        {sidebarNavigationItems.map(({ icon, path, isActive, label }) => {
          const IconComponent = icon;
          const className = `sidebar-navigation-item${isActive ? '--active' : ''}`;

          return (
            <li key={path}>
              <Link href={path} className={className} data-testid='sidebar-navigation-item'>
                <IconComponent />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
