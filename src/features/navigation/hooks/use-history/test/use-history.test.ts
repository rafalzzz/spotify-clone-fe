import { renderHook, act } from '@testing-library/react-hooks';

import { useHistory } from '..';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: () => ({
    push: mockPush,
  }),
}));

const mockUsePathname = require('next/navigation').usePathname;

const allPaths = ['/mocked-path-1', '/mocked-path-2', '/mocked-path-3'];
const MOCKED_INITIAL_STATE = {
  allPaths,
  currentPathIndex: 2,
};

const newPath = '/mocked-path-4';

const renderUseHistory = (additionalProps?: Partial<typeof MOCKED_INITIAL_STATE>) => {
  const initialState = {
    ...MOCKED_INITIAL_STATE,
    ...additionalProps,
  };

  return renderHook(() => useHistory({ initialState }));
};

describe('useHistory', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const { result } = renderUseHistory({
      allPaths: [],
      currentPathIndex: -1,
    });

    expect(result.current.isUndoButtonDisabled).toBeTruthy();
    expect(result.current.isRedoButtonDisabled).toBeTruthy();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('should push to prev path when undoHistory is called', () => {
    const { result } = renderUseHistory({ currentPathIndex: 1 });

    expect(result.current.isUndoButtonDisabled).toBeFalsy();

    act(() => {
      result.current.undoHistory();
    });

    expect(result.current.isUndoButtonDisabled).toBeTruthy();
    expect(result.current.isRedoButtonDisabled).toBeFalsy();
    expect(mockPush).toHaveBeenCalledWith(allPaths[0]);
  });

  it('should push to next path when redoHistory is called', () => {
    const { result } = renderUseHistory({ currentPathIndex: 1 });

    expect(result.current.isRedoButtonDisabled).toBeFalsy();

    act(() => {
      result.current.redoHistory();
    });

    expect(result.current.isRedoButtonDisabled).toBeTruthy();
    expect(result.current.isUndoButtonDisabled).toBeFalsy();
    expect(mockPush).toHaveBeenCalledWith(allPaths[2]);
  });

  it('redo-button should be disabled and push should not be called when adding new path', () => {
    mockUsePathname.mockReturnValueOnce(newPath);
    const { result } = renderUseHistory();

    expect(result.current.isUndoButtonDisabled).toBeFalsy();
    expect(result.current.isRedoButtonDisabled).toBeTruthy();
    expect(mockPush).not.toHaveBeenCalledWith();
  });

  it('redo-button should be disabled and push should not be called when adding path already included in state', () => {
    mockUsePathname.mockReturnValueOnce(allPaths[0]);
    const { result } = renderUseHistory();

    expect(result.current.isUndoButtonDisabled).toBeFalsy();
    expect(result.current.isRedoButtonDisabled).toBeTruthy();
    expect(mockPush).not.toHaveBeenCalledWith();
  });

  it('redo-button should be disabled when paths have been updated', async () => {
    mockUsePathname.mockReturnValueOnce(newPath);
    const { result } = renderUseHistory({ currentPathIndex: 1 });

    expect(result.current.isUndoButtonDisabled).toBeFalsy();
    expect(result.current.isRedoButtonDisabled).toBeTruthy();
    expect(mockPush).not.toHaveBeenCalledWith();
  });

  it('should update currentPathIndex when the user navigates to the path that is the next path in the array', () => {
    mockUsePathname.mockReturnValueOnce(allPaths[2]);
    const { result } = renderUseHistory({ currentPathIndex: 1 });

    expect(result.current.isUndoButtonDisabled).toBeFalsy();
    expect(result.current.isRedoButtonDisabled).toBeTruthy();
    expect(mockPush).not.toHaveBeenCalledWith();
  });
});
