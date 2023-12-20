import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { create } from 'zustand';

import { useSectionStore } from '@/store/section';

import { getItemsAmount } from '@/utils/get-items-amount';

import { MockResizeObserver, lastInstance } from '@/test-utils/common-mocks/mock-resize-observer';

import { useCalculateSectionItemsAmount } from '..';

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

const MOCKED_INLINE_SIZE = { inlineSize: 500, blockSize: 0 };

const renderUseCalculateSectionItemsAmount = () =>
  renderHook(() => useCalculateSectionItemsAmount());

describe('useCalculateSectionItemsAmount', () => {
  it('should update enableResizing, disableResizing and setItemsAmount on resize', async () => {
    const { result } = renderUseCalculateSectionItemsAmount();
    const { enableResizing, setItemsAmount, disableResizing } = useSectionStore.getState();

    act(() => {
      const ulElement = document.createElement('ul');
      result.current.current = ulElement;
    });

    act(() => {
      const mockResizeObserver = new MockResizeObserver((entries) => {
        const itemsAmount = getItemsAmount(entries);
        enableResizing();
        setItemsAmount(itemsAmount);
        disableResizing();
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
        target: document.createElement('div'),
        contentRect: contentRect as DOMRectReadOnly,
        borderBoxSize: [MOCKED_INLINE_SIZE],
        contentBoxSize: [MOCKED_INLINE_SIZE],
        devicePixelContentBoxSize: [MOCKED_INLINE_SIZE],
      };

      mockResizeObserver.mockTrigger([mockEntry]);
    });

    expect(enableResizing).toHaveBeenCalled();
    expect(disableResizing).toHaveBeenCalled();
    expect(setItemsAmount).toHaveBeenCalledWith(3);
  });

  it('should clean up MockResizeObser on unmount', () => {
    const { unmount } = renderUseCalculateSectionItemsAmount();

    unmount();

    expect(lastInstance?.disconnect).toHaveBeenCalled();
  });
});
