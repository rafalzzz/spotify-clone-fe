import { renderHook, act } from '@testing-library/react-hooks';

import { mockSongItem } from '@/consts/mocks';

import { useIsTextOverflowing } from '..';

const renderUseIsTextOverflowing = () =>
  renderHook(() => useIsTextOverflowing({ currentSong: mockSongItem }));

describe('useIsTextOverflowing', () => {
  const mockRefElement = document.createElement('div');
  (mockRefElement.getBoundingClientRect as jest.Mock) = jest.fn();

  const mockParentElement = document.createElement('div');
  (mockParentElement.getBoundingClientRect as jest.Mock) = jest.fn();

  mockParentElement.appendChild(mockRefElement);

  it('initializes with isTextOverflowing as false', () => {
    const { result } = renderUseIsTextOverflowing();
    expect(result.current.isTextOverflowing).toBe(false);
  });

  // TODO - fix text below
  /* it('detects text overflow', () => {
    (mockRefElement.getBoundingClientRect as jest.Mock).mockReturnValue({ width: 200 });
    (mockParentElement.getBoundingClientRect as jest.Mock).mockReturnValue({ width: 100 });

    const { result } = renderUseIsTextOverflowing();

    act(() => {
      result.current.ref = { current: mockRefElement };
    });

    expect(result.current.isTextOverflowing).toBe(true);
  }); */

  it('detects no text overflow', () => {
    (mockRefElement.getBoundingClientRect as jest.Mock).mockReturnValue({ width: 100 });
    (mockParentElement.getBoundingClientRect as jest.Mock).mockReturnValue({ width: 200 });

    const { result } = renderUseIsTextOverflowing();

    act(() => {
      result.current.ref = { current: mockRefElement };
    });

    expect(result.current.isTextOverflowing).toBe(false);
  });
});
