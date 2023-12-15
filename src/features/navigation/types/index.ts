export const enum EHistoryActionKind {
  UNDO_BUTTON = 'UNDO_BUTTON',
  REDO_BUTTON = 'REDO_BUTTON',
  ADD_PATH = 'ADD_PATH',
  UPDATE_PATHS = 'UPDATE_PATHS',
  UPDATE_PATH_INDEX = 'UPDATE_PATH_INDEX',
}

export type TAddPath = { pathname: string };
export type TUpdatePathIndex = { value: number };

export type TCountAction = {
  type: EHistoryActionKind;
  payload?: TAddPath | TUpdatePathIndex;
};

export type TCountState = {
  allPaths: string[];
  currentPathIndex: number;
};

export type TUseHistory = {
  initialState: {
    allPaths: string[];
    currentPathIndex: number;
  };
};

export type TUseHistoryProps = {
  isUndoButtonDisabled: boolean;
  isRedoButtonDisabled: boolean;
  undoHistory: () => void;
  redoHistory: () => void;
};
