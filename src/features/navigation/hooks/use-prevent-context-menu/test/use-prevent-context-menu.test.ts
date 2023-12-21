import { renderHook } from '@testing-library/react-hooks';

import { usePreventContextMenu } from '../';

describe('usePreventContextMenu', () => {
  it('adds and removes the context menu event listener', () => {
    const addSpy = jest.spyOn(document.body, 'addEventListener');
    const removeSpy = jest.spyOn(document.body, 'removeEventListener');

    const { unmount } = renderHook(() => usePreventContextMenu());

    expect(addSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
