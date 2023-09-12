'use-client';
import { usePathname } from 'next/navigation';
import { useReducer, useCallback, useEffect } from 'react';

enum HistoryActionKind {
  UNDO_BUTTON = 'UNDO_BUTTON',
  REDO_BUTTON = 'REDO_BUTTON',
  ADD_PATH = 'ADD_PATH',
  UPDATE_PATHS = 'UPDATE_PATHS',
  UPDATE_PATH_INDEX = 'UPDATE_PATH_INDEX',
}

type AddPathAction = { currentPath: string };
type UpdatePathIndexAction = { value: number };

type CountAction = {
  type: HistoryActionKind;
  payload?: AddPathAction | UpdatePathIndexAction;
};

type CountState = {
  allPaths: string[];
  currentPathIndex: number;
};

function historyReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case HistoryActionKind.UNDO_BUTTON:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex - 1,
      };
    case HistoryActionKind.REDO_BUTTON:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex + 1,
      };
    case HistoryActionKind.ADD_PATH:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex + 1,
        allPaths: [...state.allPaths, (payload as AddPathAction)?.currentPath],
      };
    case HistoryActionKind.UPDATE_PATHS:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex + 1,
        allPaths: [
          ...state.allPaths.slice(0, state.currentPathIndex),
          (payload as AddPathAction)?.currentPath,
        ],
      };
    case HistoryActionKind.UPDATE_PATH_INDEX:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex + (payload as UpdatePathIndexAction)?.value,
      };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  allPaths: [],
  currentPathIndex: -1,
};

const DISABLED_UNDO_BUTTON_INDEX_VALUES = [-1, 0];

export const useHistory = () => {
  const [state, dispatch] = useReducer(historyReducer, INITIAL_STATE);
  const pathname = usePathname();

  const { allPaths, currentPathIndex } = state;

  const isUndoButtonDisabled = DISABLED_UNDO_BUTTON_INDEX_VALUES.includes(currentPathIndex);
  const isRedoButtonDisabled = currentPathIndex === allPaths.length - 1;

  const undoHistory = useCallback(() => {
    dispatch({ type: HistoryActionKind.UNDO_BUTTON });
  }, []);

  const redoHistory = useCallback(() => {
    dispatch({ type: HistoryActionKind.REDO_BUTTON });
  }, []);

  const handlePathname = useCallback(() => {
    if (!pathname) return;

    const isPathInHistory = allPaths.includes(pathname);
    const isLatestPath = currentPathIndex === allPaths.length - 1;
    const isPrevPath = pathname === allPaths[currentPathIndex - 1];

    switch (true) {
      case !isPathInHistory:
        dispatch({ type: HistoryActionKind.ADD_PATH, payload: { currentPath: pathname } });
        break;

      case isLatestPath && !isPrevPath:
        dispatch({ type: HistoryActionKind.ADD_PATH, payload: { currentPath: pathname } });
        break;

      case !isLatestPath && !isPathInHistory:
        dispatch({ type: HistoryActionKind.UPDATE_PATHS, payload: { currentPath: pathname } });
        break;

      default:
        dispatch({
          type: HistoryActionKind.UPDATE_PATH_INDEX,
          payload: { value: isPrevPath ? -1 : 1 },
        });
        break;
    }
    // This is essential for the proper functioning of the hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(handlePathname, [handlePathname]);

  return { isUndoButtonDisabled, isRedoButtonDisabled, undoHistory, redoHistory };
};
