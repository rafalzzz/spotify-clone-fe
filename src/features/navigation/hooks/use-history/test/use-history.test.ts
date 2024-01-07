import { renderHook, act } from '@testing-library/react-hooks';

import { useHistory } from '..';

const mockBack = jest.fn();
const mockForward = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: () => ({
    back: mockBack,
    forward: mockForward,
  }),
}));

const renderUseHistory = () => renderHook(() => useHistory());

describe('useHistory', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call mockBack when undoHistory is called', () => {
    const { result } = renderUseHistory();

    act(() => {
      result.current.undoHistory();
    });

    expect(mockBack).toHaveBeenCalled();
  });

  it('should call mockForward when undoHistory is called', () => {
    const { result } = renderUseHistory();

    act(() => {
      result.current.redoHistory();
    });

    expect(mockForward).toHaveBeenCalled();
  });
});
