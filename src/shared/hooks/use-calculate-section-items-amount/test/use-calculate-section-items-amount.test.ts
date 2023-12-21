import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { create } from 'zustand';

import { useSectionStore } from '@/store/section';

import { lastInstance } from '@/test-utils/common-mocks/mock-resize-observer';

import { useCalculateSectionItemsAmount, RESIZE_TIMEOUT } from '..';

const createTestSectionStore = () =>
  create(() => ({
    enableResizing: jest.fn(),
    disableResizing: jest.fn(),
    setItemsAmount: jest.fn(),
  }));

jest.mock('@/store/section', () => {
  return {
    useSectionStore: createTestSectionStore(),
  };
});

jest.mock('@/utils/get-items-amount', () => ({
  getItemsAmount: jest.fn(() => 3),
}));

const createUlElement = () => document.createElement('ul');

const createMockEntry = (width: number) => ({
  target: document.createElement('div'),
  contentRect: { width } as DOMRectReadOnly,
  borderBoxSize: [{ inlineSize: width, blockSize: 0 }],
  contentBoxSize: [{ inlineSize: width, blockSize: 0 }],
  devicePixelContentBoxSize: [{ inlineSize: width, blockSize: 0 }],
});

const renderUseCalculateSectionItemsAmount = () =>
  renderHook(() => useCalculateSectionItemsAmount());

describe('useCalculateSectionItemsAmount', () => {
  let enableResizing: () => void,
    disableResizing: () => void,
    setItemsAmount: (itemsAmount: number) => void;

  beforeEach(() => {
    ({ enableResizing, setItemsAmount, disableResizing } = useSectionStore.getState());
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should call enableResizing and setItemsAmount on resize', () => {
    const { result } = renderUseCalculateSectionItemsAmount();

    act(() => {
      result.current.current = createUlElement();
      const mockEntry = createMockEntry(500);
      lastInstance?.mockTrigger([mockEntry]);
      jest.advanceTimersByTime(RESIZE_TIMEOUT);
    });

    expect(enableResizing).toHaveBeenCalled();
    expect(setItemsAmount).toHaveBeenCalledWith(3);
  });

  it('should call disableResizing after the delay', () => {
    renderUseCalculateSectionItemsAmount();

    act(() => {
      const mockEntry = createMockEntry(600);
      lastInstance?.mockTrigger([mockEntry]);
      jest.advanceTimersByTime(RESIZE_TIMEOUT);
    });

    expect(disableResizing).toHaveBeenCalled();
  });

  it('should not update if itemsAmount does not change', () => {
    const { result } = renderUseCalculateSectionItemsAmount();

    act(() => {
      result.current.current = createUlElement();

      const mockEntry1 = createMockEntry(500);
      lastInstance?.mockTrigger([mockEntry1]);
      // The end of first resize event
      jest.advanceTimersByTime(RESIZE_TIMEOUT);

      // The same value
      const mockEntry2 = createMockEntry(500);
      lastInstance?.mockTrigger([mockEntry2]);
      // The end of second resize event
      jest.advanceTimersByTime(RESIZE_TIMEOUT);
    });

    // Method called only one time
    expect(setItemsAmount).toHaveBeenCalledTimes(1);
  });

  it('should handle the case when elementRef.current is null', () => {
    const { result } = renderUseCalculateSectionItemsAmount();

    act(() => {
      result.current.current = null;
    });

    act(() => {
      // Waiting for potential operations to complete
      jest.advanceTimersByTime(RESIZE_TIMEOUT);
    });

    expect(enableResizing).not.toHaveBeenCalled();
    expect(setItemsAmount).not.toHaveBeenCalled();
    expect(disableResizing).not.toHaveBeenCalled();
  });

  it('should clean up MockResizeObserver on unmount', () => {
    const { unmount } = renderUseCalculateSectionItemsAmount();

    unmount();

    expect(lastInstance?.disconnect).toHaveBeenCalled();
  });
});
