import { act, renderHook } from '@testing-library/react-hooks';

import { useSectionStore } from '..';

const renderUseSectionStore = () => renderHook(() => useSectionStore());

describe('useSectionStore', () => {
  it('should enable and disable isResizing state', () => {
    const { result } = renderUseSectionStore();

    expect(result.current.isResizing).toBe(false);

    act(() => {
      result.current.enableResizing();
    });

    expect(result.current.isResizing).toBe(true);

    act(() => {
      result.current.disableResizing();
    });

    expect(result.current.isResizing).toBe(false);
  });

  it('should change itemsAmount', () => {
    const { result } = renderUseSectionStore();

    const itemsAmount = 5;

    act(() => {
      result.current.setItemsAmount(itemsAmount);
    });

    expect(result.current.itemsAmount).toBe(itemsAmount);
  });
});
