import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { commonButtonProps } from '../../../../test-utils/common-mocks/common-button-props';

import { CustomButton } from '.';

import '@testing-library/jest-dom';

const MOCKED_BUTTON_TEXT = 'Test Button';

const getCustomButton = (additionalProps) => {
  const props = {
    ...commonButtonProps,
    text: MOCKED_BUTTON_TEXT,
    ...additionalProps,
  };

  return <CustomButton {...props} />;
};

describe('CustomButton', () => {
  it('renders the correct text', () => {
    const customButton = getCustomButton();
    render(customButton);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(MOCKED_BUTTON_TEXT);
  });

  it('handles click events', async () => {
    const onClick = jest.fn();
    const additionalProps = { onClick };
    const customButton = getCustomButton(additionalProps);
    render(customButton);

    const buttonElement = await screen.findByRole('button', { name: MOCKED_BUTTON_TEXT });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement, { button: 0 });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
