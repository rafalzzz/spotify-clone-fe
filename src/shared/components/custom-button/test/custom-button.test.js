import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { CustomButton } from '..';

import { commonButtonProps } from '@/test-utils/common-mocks/common-button-props';

import '@testing-library/jest-dom';

const MOCKED_BUTTON_TEXT = 'Test Button';

const renderCustomButton = (additionalProps) => {
  const props = {
    ...commonButtonProps,
    text: MOCKED_BUTTON_TEXT,
    ...additionalProps,
  };

  return render(<CustomButton {...props} />);
};

describe('CustomButton', () => {
  it('render component without error', () => {
    const screen = renderCustomButton();
    expect(screen).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const { getByRole } = renderCustomButton();

    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(MOCKED_BUTTON_TEXT);
  });

  it('handles click event', async () => {
    const onClick = jest.fn();
    const additionalProps = { onClick };
    const { findByRole } = renderCustomButton(additionalProps);

    const buttonElement = await findByRole('button', { name: MOCKED_BUTTON_TEXT });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement, { button: 0 });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
