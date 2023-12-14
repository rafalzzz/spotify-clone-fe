import { render } from '@testing-library/react';
import React from 'react';

import { Duration } from '../index';

const renderDuration = (seconds: number = 0) => render(<Duration seconds={seconds} />);

describe('Duration', () => {
  it('renders component without error', () => {
    const screen = renderDuration();
    expect(screen).toMatchSnapshot();
  });

  it('formats seconds into MM:SS format', () => {
    const testCases = [
      { seconds: 75, expected: '1:15' },
      { seconds: 3661, expected: '1:01:01' },
    ];

    testCases.forEach(({ seconds, expected }, index) => {
      const { queryAllByTestId } = renderDuration(seconds);
      const buttonElement = queryAllByTestId('duration-button');
      expect(buttonElement[index].textContent).toBe(expected);
    });
  });
});
