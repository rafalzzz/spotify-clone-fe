import { renderHook, act } from '@testing-library/react-hooks';

import { MockResizeObserver } from '@/interfaces/mock-resize-observer';

import { useIsImageVisible } from '../';

const ref = { current: document.createElement('div') };
const renderUseLocalStorage = () => renderHook(() => useIsImageVisible({ ref }));

describe('useIsImageVisible', () => {
  it('initializes with isImageVisible as true', () => {
    const { result } = renderUseLocalStorage();
    expect(result.current).toBe(true);
  });

  it('cleans up observer on unmount', () => {
    const { unmount } = renderUseLocalStorage();

    const resizeObserverMock = window.ResizeObserver as jest.MockedClass<typeof ResizeObserver>;
    const resizeObserverInstance = resizeObserverMock.mock
      .instances[0] as unknown as MockResizeObserver;

    unmount();

    expect(resizeObserverInstance.unobserve).toHaveBeenCalled();
  });

  it('changes visibility on height change', () => {
    let resizeObserverCallback: (arg0: { contentRect: { height: number } }[]) => void;

    window.ResizeObserver = jest.fn().mockImplementation((callback) => {
      resizeObserverCallback = callback;
      return { observe: jest.fn(), unobserve: jest.fn() };
    });

    const { result } = renderUseLocalStorage();

    act(() => {
      resizeObserverCallback([{ contentRect: { height: 0 } }]);
    });

    expect(result.current).toBe(false);
  });
});
