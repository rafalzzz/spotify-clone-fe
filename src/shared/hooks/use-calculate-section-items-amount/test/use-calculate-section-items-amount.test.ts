import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import { useSectionStore } from '@/store/section';

import { getItemsAmount } from '@/utils/get-items-amount';

import {
  MockResizeObserver,
  resetMock,
  lastInstance,
} from '@/test-utils/common-mocks/mock-resize-observer';

import { useCalculateSectionItemsAmount } from '..';

jest.mock('@/store/section', () => ({
  useSectionStore: jest.fn().mockImplementation(() => ({
    enableResizing: jest.fn(),
    disableResizing: jest.fn(),
    setItemsAmount: jest.fn(),
  })),
}));

const MOCKED_INLINE_SIZE = { inlineSize: 500, blockSize: 0 };

const renderUseCalculateSectionItemsAmount = () =>
  renderHook(() => useCalculateSectionItemsAmount());

describe('useCalculateSectionItemsAmount', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
    resetMock();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should update enableResizing, disableResizing and setItemsAmount on resize', async () => {
    const { result } = renderUseCalculateSectionItemsAmount();
    const mockStore = useSectionStore();

    act(() => {
      const ulElement = document.createElement('ul');
      result.current.current = ulElement;
    });

    await act(async () => {
      const mockResizeObserver = new MockResizeObserver((entries) => {
        const itemsAmount = getItemsAmount(entries);
        mockStore.enableResizing();
        mockStore.setItemsAmount(itemsAmount);
        mockStore.disableResizing();
      });

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
      jest.runAllTimers();
      await Promise.resolve();
    });

    expect(mockStore.enableResizing).toHaveBeenCalled();
    expect(mockStore.disableResizing).toHaveBeenCalled();
    expect(mockStore.setItemsAmount).toHaveBeenCalledWith(3);
  });

  it('should clean up MockResizeObser on unmount', () => {
    const { unmount } = renderUseCalculateSectionItemsAmount();

    unmount();

    expect(lastInstance?.disconnect).toHaveBeenCalled();
  });
});
