import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { commonButtonProps } from '../../../../test-utils/common-mocks/common-button-props';

import { CustomFormButtons } from '.';

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

const getCustomFormButtons = (additionalProps) => {
  return <CustomFormButtons formButtons={BUTTONS_DATA_MOCK} />;
};

describe('CustomFormButtons', () => {
  it('renders the correct text', () => {
    //window.matchMedia mock resolves issue
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {},
        };
      };

    const customFormButtons = getCustomFormButtons();
    render(customFormButtons);

    BUTTON_TEXT_MOCKS.forEach(async (buttonText) => {
      const button = await screen.findByRole('button', { name: buttonText });
      console.log({ button, buttonText });
      expect(button).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent(buttonText);
    });
  });
});
