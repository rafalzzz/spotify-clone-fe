import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { useHistory } from '@/navigation/hooks/use-history';

import { NavButtons } from '../';

const mockUndoHistory = jest.fn();
const mockRedoHistory = jest.fn();

const UNDO_HISTORY_TEST_ID = 'undo-history';
const REDO_HISTORY_TEST_ID = 'redo-history';

const BASIC_HOOK_VALUES = {
  undoHistory: mockUndoHistory,
  redoHistory: mockRedoHistory,
};

jest.mock('@/navigation/hooks/use-history');

const renderNavButtons = () => render(<NavButtons />);

describe('NavButtons', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('render component without error', () => {
    (useHistory as jest.Mock).mockReturnValue(BASIC_HOOK_VALUES);

    const screen = renderNavButtons();
    expect(screen).toMatchSnapshot();
  });

  it('should call mockUndoHistory when user click undo-history button', async () => {
    (useHistory as jest.Mock).mockReturnValue(BASIC_HOOK_VALUES);

    const { queryByTestId } = renderNavButtons();
    const undoHistoryButton = queryByTestId(UNDO_HISTORY_TEST_ID);
    expect(undoHistoryButton).toBeInTheDocument();

    await userEvent.click(undoHistoryButton as Element);

    expect(mockUndoHistory).toHaveBeenCalledTimes(1);
    expect(mockRedoHistory).not.toHaveBeenCalled();
  });

  it('should call mockRedoHistory when user click redo-history button', async () => {
    (useHistory as jest.Mock).mockReturnValue(BASIC_HOOK_VALUES);

    const { queryByTestId } = renderNavButtons();
    const redoHistoryButton = queryByTestId(REDO_HISTORY_TEST_ID);
    expect(redoHistoryButton).toBeInTheDocument();

    await userEvent.click(redoHistoryButton as Element);

    expect(mockRedoHistory).toHaveBeenCalledTimes(1);
    expect(mockUndoHistory).not.toHaveBeenCalled();
  });
});
