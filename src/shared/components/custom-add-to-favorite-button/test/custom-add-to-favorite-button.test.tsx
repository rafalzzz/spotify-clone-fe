import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TCustomAddToFavoriteButton } from '@/types/components';

import { CustomAddToFavoriteButton } from '../';

const BUTTON_TEST_ID = 'custom-add-to-favorite-button';
const TOOLTIP_TITLE = 'Test Tooltip';

const renderCustomAddToFavoriteButton = (props: Partial<TCustomAddToFavoriteButton> = {}) =>
  render(<CustomAddToFavoriteButton title={TOOLTIP_TITLE} onClick={() => {}} {...props} />);

describe('CustomAddToFavoriteButton', () => {
  it('renders component without error', () => {
    const screen = renderCustomAddToFavoriteButton();
    expect(screen).toMatchSnapshot();
  });

  it('renders with default props', () => {
    const { queryByTestId } = renderCustomAddToFavoriteButton();
    const button = queryByTestId(BUTTON_TEST_ID);

    expect(button).toHaveClass('custom-add-to-favorite-button--inactive');
    expect(button).toBeEnabled();
  });

  it('renders as active when isAddedToFav is false', () => {
    const { queryByTestId } = renderCustomAddToFavoriteButton({ isAddedToFav: false });
    const button = queryByTestId(BUTTON_TEST_ID);

    expect(button).toHaveClass('custom-add-to-favorite-button--active');
  });

  it('renders as disabled when disabled prop is true', () => {
    const { queryByTestId } = renderCustomAddToFavoriteButton({ disabled: true });
    const button = queryByTestId(BUTTON_TEST_ID);
    expect(button).toBeDisabled();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = renderCustomAddToFavoriteButton({ onClick: handleClick });

    const button = getByTestId(BUTTON_TEST_ID);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
