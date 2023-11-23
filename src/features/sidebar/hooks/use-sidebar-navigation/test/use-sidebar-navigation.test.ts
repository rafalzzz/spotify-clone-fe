import { renderHook } from '@testing-library/react-hooks';
import { usePathname } from 'next/navigation';

import { MOCKED_NAVIGATION_ITEMS } from '@/sidebar/consts/mocked-navigation-items';

import { useSidebarNavigation } from '../';

type ResultType = { current: { sidebarNavigationItems: typeof MOCKED_NAVIGATION_ITEMS } };

const renderUseSidebarNavigation = () => renderHook(() => useSidebarNavigation());

const getNavigationItemByLabel = (itemLabel: string, result: ResultType) =>
  result.current.sidebarNavigationItems.find(({ label }) => label === itemLabel);

describe('useSidebarNavigation', () => {
  it('marks the Home item as active when pathname is "/"', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    const { result } = renderUseSidebarNavigation();

    const homeItem = getNavigationItemByLabel('Home', result as unknown as ResultType);
    const searchItem = getNavigationItemByLabel('Search', result as unknown as ResultType);

    expect(homeItem!.isActive).toBe(true);
    expect(searchItem!.isActive).toBe(false);
  });

  it('marks the Search item as active when pathname starts with "/search"', () => {
    (usePathname as jest.Mock).mockReturnValue('/search/test');

    const { result } = renderHook(() => useSidebarNavigation());

    const homeItem = getNavigationItemByLabel('Home', result as unknown as ResultType);
    const searchItem = getNavigationItemByLabel('Search', result as unknown as ResultType);

    expect(homeItem!.isActive).toBe(false);
    expect(searchItem!.isActive).toBe(true);
  });
});
