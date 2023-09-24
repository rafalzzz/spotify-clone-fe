import { renderHook, act } from '@testing-library/react-hooks';
import { RefObject } from 'react';

import { useResizeSidebar } from '../';

const DEFAULT_WIDTH = '200';

const mockSetValue = jest.fn();
jest.mock('@/hooks/use-local-storage', () => ({
  useLocalStorage: jest.fn(() => ({
    value: DEFAULT_WIDTH,
    setValue: mockSetValue,
  })),
}));

const renderUseLoginForm = (sidebarRef = { current: null } as RefObject<HTMLDivElement>) =>
  renderHook(() => useResizeSidebar({ sidebarRef }));

describe('useResizeSidebar', () => {
  let addEventListenerSpy: jest.SpyInstance;
  let removeEventListenerSpy: jest.SpyInstance;

  beforeEach(() => {
    addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    mockSetValue.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add event listeners on mount and remove them on unmount', () => {
    const { unmount } = renderUseLoginForm();

    expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(addEventListenerSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));
  });

  it('should handle resizing when started and sidebarRef is available', () => {
    const INITIAL_WIDTH = 50;
    const MOUSE_MOVE_WIDTH = 200;

    const sidebarRef = {
      current: {
        getBoundingClientRect: () => ({ left: INITIAL_WIDTH }),
      },
    } as RefObject<HTMLDivElement>;

    const { result } = renderUseLoginForm(sidebarRef);

    act(() => {
      result.current.startResizing();
    });

    const mouseMoveEvent = new MouseEvent('mousemove', { clientX: MOUSE_MOVE_WIDTH });

    act(() => {
      window.dispatchEvent(mouseMoveEvent);
    });

    const value = MOUSE_MOVE_WIDTH - INITIAL_WIDTH;
    expect(mockSetValue).toHaveBeenCalledWith(String(value));
  });

  it('should not handle resizing when not started', () => {
    const sidebarRef = { current: null } as RefObject<HTMLDivElement>;
    renderUseLoginForm(sidebarRef);

    const mouseMoveEvent = new MouseEvent('mousemove', { clientX: 200 });

    act(() => {
      window.dispatchEvent(mouseMoveEvent);
    });

    expect(mockSetValue).not.toHaveBeenCalled();
  });
});
