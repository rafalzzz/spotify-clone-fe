import { render } from '@testing-library/react';

import { MOCKED_NAVIGATION_ITEMS } from '@/sidebar/consts/mocked-navigation-items';
import { useSidebarNavigation } from '@/sidebar/hooks/use-sidebar-navigation';

import { SidebarNavigation } from '../';

import '@testing-library/jest-dom/extend-expect';

jest.mock('@/sidebar/hooks/use-sidebar-navigation');

const renderSidebarNavigation = () => render(<SidebarNavigation />);

describe('SidebarNavigation', () => {
  beforeEach(() => {
    (useSidebarNavigation as jest.Mock).mockReturnValue({
      sidebarNavigationItems: MOCKED_NAVIGATION_ITEMS,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render all navigation items', () => {
    const { getAllByTestId, getByText } = renderSidebarNavigation();
    const items = getAllByTestId('sidebar-navigation-item');

    expect(items).toHaveLength(MOCKED_NAVIGATION_ITEMS.length);
    expect(getByText(MOCKED_NAVIGATION_ITEMS[0].label)).toBeInTheDocument();
    expect(getByText(MOCKED_NAVIGATION_ITEMS[1].label)).toBeInTheDocument();
  });

  it('should have the correct path for each navigation item', () => {
    const { getByText } = renderSidebarNavigation();

    const link1 = getByText(MOCKED_NAVIGATION_ITEMS[0].label).closest('a');
    const link2 = getByText(MOCKED_NAVIGATION_ITEMS[1].label).closest('a');

    expect(link1).toHaveAttribute('href', MOCKED_NAVIGATION_ITEMS[0].path);
    expect(link2).toHaveAttribute('href', MOCKED_NAVIGATION_ITEMS[1].path);
  });

  it('should set the active class for the active navigation item', () => {
    const { getByText } = renderSidebarNavigation();
    const activeLink = getByText(MOCKED_NAVIGATION_ITEMS[1].label).closest('a');

    expect(activeLink).toHaveClass('sidebar-navigation-item--active');
  });
});
