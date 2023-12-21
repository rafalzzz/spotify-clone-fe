import { renderHook } from '@testing-library/react-hooks';

import { usePreventContextMenu } from '../';

const renderUsePreventContextMenu = () => renderHook(() => usePreventContextMenu());

describe('usePreventContextMenu', () => {
  it('adds and removes the context menu event listener', () => {
    const addSpy = jest.spyOn(document.body, 'addEventListener');
    const removeSpy = jest.spyOn(document.body, 'removeEventListener');

    const { unmount } = renderUsePreventContextMenu();

    expect(addSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('prevents default context menu behavior', () => {
    renderUsePreventContextMenu();

    const event = new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true,
    });

    jest.spyOn(event, 'preventDefault');

    document.body.dispatchEvent(event);

    expect(event.preventDefault).toHaveBeenCalled();
  });
});
