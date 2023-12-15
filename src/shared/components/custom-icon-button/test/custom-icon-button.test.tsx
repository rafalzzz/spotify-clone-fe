import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import { TCustomIconButton } from '@/types/components';

import { CustomIconButton } from '../';

const CUSTOM_ICON_BUTTON_TEST_ID = 'icon-btn-test';

const renderCustomIconButton = (props: Partial<TCustomIconButton> = {}) =>
  render(
    <CustomIconButton testId={CUSTOM_ICON_BUTTON_TEST_ID} {...props}>
      <span>Test</span>
    </CustomIconButton>,
  );

describe('CustomIconButton', () => {
  it('renders component without error', () => {
    const screen = renderCustomIconButton();
    expect(screen).toMatchSnapshot();
  });

  it('renders the component with children', () => {
    const { queryByTestId } = renderCustomIconButton();
    const button = queryByTestId(CUSTOM_ICON_BUTTON_TEST_ID);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test');
  });

  it('renders with active class when isActive is true', () => {
    const { queryByTestId } = renderCustomIconButton({ isActive: true });
    const button = queryByTestId(CUSTOM_ICON_BUTTON_TEST_ID);
    expect(button).toHaveClass('custom-icon-button--active');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = renderCustomIconButton({ onClick: handleClick });

    const button = getByTestId(CUSTOM_ICON_BUTTON_TEST_ID);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
