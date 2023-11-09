import { renderHook, act } from '@testing-library/react-hooks';

import { MockResizeObserver, resetMock, lastInstance } from '@/test-utils/resize-observer-mock';

import { useCalculateSectionItemsAmount } from '..';

const MOCKED_INLINE_SIZE = { inlineSize: 500, blockSize: 0 };

const renderUseCalculateSectionItemsAmount = () =>
  renderHook(() => useCalculateSectionItemsAmount());

describe('useCalculateSectionItemsAmount', () => {
  afterEach(() => {
    jest.clearAllMocks();
    resetMock();
  });

  it('should initialize with a sectionItemsCount of 1', () => {
    const { result } = renderUseCalculateSectionItemsAmount();
    expect(result.current.sectionItemsCount).toBe(1);
  });

  it('should update sectionItemsCount on resize', () => {
    const { result } = renderUseCalculateSectionItemsAmount();

    act(() => {
      const ulElement = document.createElement('ul');
      result.current.elementRef.current = ulElement;
    });

    act(() => {
      const mockResizeObserver = new MockResizeObserver(() => {});

      const contentRect = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 500,
        top: 0,
        width: 500,
        x: 0,
        y: 0,
      };

      const mockEntry: ResizeObserverEntry = {
        target: document.createElement('ul'),
        contentRect: contentRect as DOMRectReadOnly,
        borderBoxSize: [MOCKED_INLINE_SIZE],
        contentBoxSize: [MOCKED_INLINE_SIZE],
        devicePixelContentBoxSize: [MOCKED_INLINE_SIZE],
      };

      mockResizeObserver.mockTrigger([mockEntry]);
    });

    expect(result.current.sectionItemsCount).toEqual(1);
  });

  it('should clean up MockResizeObser on unmount', () => {
    const { unmount } = renderHook(() => useCalculateSectionItemsAmount());

    unmount();

    expect(lastInstance?.disconnect).toHaveBeenCalled();
  });
});
