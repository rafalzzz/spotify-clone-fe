import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';

import { CustomButtonProps } from '@/types/custom-button-props';

import { CustomButton } from '..';

import { commonButtonProps } from '@/test-utils/common-mocks/common-button-props';

const MOCKED_TEST_ID = 'custom-button';
const MOCKED_BUTTON_TEXT = 'Test Button';

const renderCustomButton = (additionalProps = {}) => {
  const props = {
    ...commonButtonProps,
    testId: MOCKED_TEST_ID,
    text: MOCKED_BUTTON_TEXT,
    ...additionalProps,
  };

  return render(<CustomButton {...(props as CustomButtonProps)} />);
};

describe('CustomButton', () => {
  it('render component without error', () => {
    const screen = renderCustomButton();
    expect(screen).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const { queryByTestId } = renderCustomButton();

    const button = queryByTestId(MOCKED_TEST_ID);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(MOCKED_BUTTON_TEXT);
  });

  it('handles click event', async () => {
    const onClick = jest.fn();
    const additionalProps = { onClick };
    const { queryByTestId } = renderCustomButton(additionalProps);

    const button = queryByTestId(MOCKED_TEST_ID);
    expect(button).toBeInTheDocument();

    await userEvent.click(button as Element);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the parameter is defined.', () => {
    const additionalProps = { disabled: true };
    const { queryByTestId } = renderCustomButton(additionalProps);

    const button = queryByTestId(MOCKED_TEST_ID);
    expect(button).toBeDisabled();
  });
});
