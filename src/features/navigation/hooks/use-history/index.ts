'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useReducer, useCallback, useEffect } from 'react';

import {
  EHistoryActionKind,
  TAddPath,
  TCountAction,
  TCountState,
  TUpdatePathIndex,
} from '@/navigation/types';

const historyReducer = (state: TCountState, action: TCountAction) => {
  const { type, payload } = action;
  switch (type) {
    case EHistoryActionKind.UNDO_BUTTON:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex - 1,
      };
    case EHistoryActionKind.REDO_BUTTON:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex + 1,
      };
    case EHistoryActionKind.ADD_PATH:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex + 1,
        allPaths: [...state.allPaths, (payload as TAddPath)?.pathname],
      };
    case EHistoryActionKind.UPDATE_PATHS:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex + 1,
        allPaths: [
          ...state.allPaths.slice(0, state.currentPathIndex + 1),
          (payload as TAddPath)?.pathname,
        ],
      };
    case EHistoryActionKind.UPDATE_PATH_INDEX:
      return {
        ...state,
        currentPathIndex: state.currentPathIndex + (payload as TUpdatePathIndex)?.value,
      };
    default:
      return state;
  }
};

const DISABLED_UNDO_BUTTON_INDEX_VALUES = [-1, 0];

type TUseHistory = {
  initialState: {
    allPaths: string[];
    currentPathIndex: number;
  };
};

export const useHistory = ({ initialState }: TUseHistory) => {
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const { push } = useRouter();
  const pathname = usePathname();

  const { allPaths, currentPathIndex } = state;

  const isUndoButtonDisabled = DISABLED_UNDO_BUTTON_INDEX_VALUES.includes(currentPathIndex);
  const isRedoButtonDisabled = currentPathIndex === allPaths.length - 1;

  const undoHistory = useCallback(() => {
    dispatch({ type: EHistoryActionKind.UNDO_BUTTON });
  }, []);

  const redoHistory = useCallback(() => {
    dispatch({ type: EHistoryActionKind.REDO_BUTTON });
  }, []);

  const handlePathname = useCallback(() => {
    if (!pathname) return;

    const isPathInHistory = allPaths.includes(pathname);
    const lastIndex = allPaths.length - 1;
    const isLatestPath = currentPathIndex === lastIndex;
    const isPrevPath = pathname === allPaths[currentPathIndex - 1];
    const isNextPath = pathname === allPaths[currentPathIndex + 1];

    switch (true) {
      case (isLatestPath && !isPathInHistory) || (isLatestPath && !isPrevPath):
        dispatch({ type: EHistoryActionKind.ADD_PATH, payload: { pathname } });
        break;

      case !isLatestPath && !isPathInHistory && !isNextPath:
        dispatch({ type: EHistoryActionKind.UPDATE_PATHS, payload: { pathname } });
        break;

      default:
        dispatch({
          type: EHistoryActionKind.UPDATE_PATH_INDEX,
          payload: { value: isPrevPath ? -1 : 1 },
        });
        break;
    }
    // This is essential for the proper functioning of the hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(handlePathname, [handlePathname]);

  const handleHistoryChange = useCallback(() => {
    const historyPathname = allPaths[currentPathIndex];
    if (historyPathname && pathname !== historyPathname) {
      push(allPaths[currentPathIndex]);
    }
    // This is essential for the proper functioning of the hook,
    // because changes connected with `pathname` are handled in useEffect above.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPaths, currentPathIndex, push]);

  useEffect(handleHistoryChange, [handleHistoryChange]);

  return { isUndoButtonDisabled, isRedoButtonDisabled, undoHistory, redoHistory };
};
