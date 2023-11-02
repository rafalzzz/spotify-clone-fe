import { HomeFilled, SearchOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const SIDEBAR_NAVIGATION_PATHS = {
  HOME: '/',
  SEARCH: '/search',
};

export const useSidebarNavigation = () => {
  const pathname = usePathname();

  const sidebarNavigationItems = useMemo(
    () => [
      {
        icon: HomeFilled,
        path: SIDEBAR_NAVIGATION_PATHS.HOME,
        isActive: pathname === SIDEBAR_NAVIGATION_PATHS.HOME,
        label: 'Home',
      },
      {
        icon: SearchOutlined,
        path: SIDEBAR_NAVIGATION_PATHS.SEARCH,
        isActive: pathname?.startsWith(SIDEBAR_NAVIGATION_PATHS.SEARCH),
        label: 'Search',
      },
    ],
    [pathname],
  );

  return { sidebarNavigationItems };
};
