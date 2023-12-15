import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Duration } from '../index';

const DURATION_BUTTON_TEST_ID = 'duration-button';

type TRenderDuration = {
  seconds?: number;
  isReversedTime?: boolean;
  onClick?: () => void;
};

const renderDuration = ({ seconds = 0, isReversedTime = false, onClick }: TRenderDuration = {}) =>
  render(<Duration seconds={seconds} isReversedTime={isReversedTime} onClick={onClick} />);

describe('Duration', () => {
  it('renders component without error', () => {
    const screen = renderDuration();
    expect(screen).toMatchSnapshot();
  });

  it('formats seconds into HH:MM:SS format', () => {
    const testCases = [
      { seconds: 75, expected: '1:15' },
      { seconds: 3661, expected: '1:01:01' },
    ];

    testCases.forEach(({ seconds, expected }, index) => {
      const { queryAllByTestId } = renderDuration({ seconds });
      const buttonElement = queryAllByTestId(DURATION_BUTTON_TEST_ID);
      expect(buttonElement[index].textContent).toBe(expected);
    });
  });

  it('display negative value when isReversedTime is true', () => {
    const testCases = [
      { seconds: 75, expected: '-1:15' },
      { seconds: 3661, expected: '-1:01:01' },
    ];

    testCases.forEach(({ seconds, expected }, index) => {
      const { queryAllByTestId } = renderDuration({ seconds, isReversedTime: true });
      const buttonElement = queryAllByTestId(DURATION_BUTTON_TEST_ID);
      expect(buttonElement[index].textContent).toBe(expected);
    });
  });

  it('calls onClick handler when the button is clicked', () => {
    const mockOnClick = jest.fn();

    const { queryByTestId } = renderDuration({ onClick: mockOnClick });

    const button = queryByTestId(DURATION_BUTTON_TEST_ID);
    fireEvent.click(button as HTMLElement);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
