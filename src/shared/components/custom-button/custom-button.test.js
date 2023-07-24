import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { commonButtonProps } from '../../../../test-utils/common-mocks/common-button-props';

import { CustomButton } from '.';

import '@testing-library/jest-dom';

const getCustomButton = (additionalProps) => {
  const props = {
    ...commonButtonProps,
    text: 'Test Button',
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
    expect(buttonElement).toHaveTextContent('Test Button');
  });

  it('handles click events', async () => {
    const onClick = jest.fn();
    const additionalProps = { onClick };
    const customButton = getCustomButton(additionalProps);
    render(customButton);

    const buttonElement = await screen.findByRole('button', { name: /test Button/i });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement, { button: 0 });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
