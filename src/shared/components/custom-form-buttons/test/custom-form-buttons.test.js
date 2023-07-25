import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { CustomFormButtons } from '..';

import { commonButtonProps } from '@/test-utils/common-mocks/common-button-props';

import '@testing-library/jest-dom';

const BUTTON_TEXT_MOCKS = ['Test Button', 'Test Button2'];

const BUTTONS_DATA_MOCK = [
  {
    ...commonButtonProps,
    text: BUTTON_TEXT_MOCKS[0],
    key: 'Test1',
  },
  {
    ...commonButtonProps,
    text: BUTTON_TEXT_MOCKS[1],
    key: 'Test2',
  },
];

const renderCustomFormButtons = () => {
  return render(<CustomFormButtons formButtons={BUTTONS_DATA_MOCK} />);
};

describe('CustomFormButtons', () => {
  it('render component without error', () => {
    const screen = renderCustomFormButtons();
    expect(screen).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const { findByRole } = renderCustomFormButtons();

    BUTTON_TEXT_MOCKS.forEach(async (buttonText) => {
      const button = await findByRole('button', { name: buttonText });
      expect(button).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent(buttonText);
    });
  });
});
