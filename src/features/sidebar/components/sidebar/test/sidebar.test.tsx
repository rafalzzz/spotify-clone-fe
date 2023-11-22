import { render, fireEvent, waitFor } from '@testing-library/react';

import { useResizeSidebar } from '@/sidebar/hooks/use-resize-sidebar';

import Sidebar from '../';

import '@testing-library/jest-dom/extend-expect';

jest.mock('@/sidebar/hooks/use-resize-sidebar', () => ({
  useResizeSidebar: jest.fn(),
}));

const renderSidebar = () => render(<Sidebar />);

describe('Sidebar', () => {
  let startResizingMock: jest.Mock;
  let sidebarWidthMock: number;

  beforeEach(() => {
    startResizingMock = jest.fn();
    sidebarWidthMock = 200;

    (useResizeSidebar as jest.Mock).mockImplementation(() => ({
      sidebarWidth: sidebarWidthMock,
      startResizing: startResizingMock,
    }));
  });

  it('render component without error', async () => {
    await waitFor(() => {
      const screen = renderSidebar();
      expect(screen).toMatchSnapshot();
    });
  });

  it('should apply the width from useResizeSidebar', async () => {
    await waitFor(() => {
      const { queryByTestId } = renderSidebar();
      const sidebarElement = queryByTestId('sidebar');
      expect(sidebarElement?.style.width).toBe(`${sidebarWidthMock}px`);
    });
  });

  it('should call startResizing when the resizer is clicked', async () => {
    await waitFor(() => {
      const { queryByTestId } = renderSidebar();
      const resizerElement = queryByTestId('resizer');
      fireEvent.mouseDown(resizerElement as HTMLElement);
      expect(startResizingMock).toHaveBeenCalled();
    });
  });
});
