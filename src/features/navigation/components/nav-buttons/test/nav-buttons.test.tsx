import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { NavButtons } from '../';

const mockedUndoHistory = jest.fn();
const mockedRedoHistory = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    back: mockedUndoHistory,
    forward: mockedRedoHistory,
  }),
}));

const renderNavButtons = () => render(<NavButtons />);

describe('NavButtons', () => {
  beforeEach(() => {
    (mockedUndoHistory as jest.Mock).mockClear();
    (mockedRedoHistory as jest.Mock).mockClear();
  });

  it('render component without error', () => {
    const screen = renderNavButtons();
    expect(screen).toMatchSnapshot();
  });

  it('should call mockedUndoHistory when user click undo-button', async () => {
    const { queryByTestId } = renderNavButtons();
    const undoHistoryButton = queryByTestId('undo-history');
    expect(undoHistoryButton).toBeInTheDocument();

    await userEvent.click(undoHistoryButton as Element);

    expect(mockedUndoHistory).toHaveBeenCalledTimes(1);
    expect(mockedRedoHistory).not.toHaveBeenCalled();
  });

  it('should call mockedRedoHistory when user click redo-button', async () => {
    const { queryByTestId } = renderNavButtons();
    const redoHistoryButton = queryByTestId('redo-history');
    expect(redoHistoryButton).toBeInTheDocument();

    await userEvent.click(redoHistoryButton as Element);

    expect(mockedRedoHistory).toHaveBeenCalledTimes(1);
    expect(mockedUndoHistory).not.toHaveBeenCalled();
  });
});
