import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TCustomAddToFavoriteButton } from '@/types/components';

import { CustomAddToFavoriteButton } from '../';

const BUTTON_TEST_ID = 'custom-add-to-favorite-button';
const IS_IN_FAVORITES_ICON_TEST_ID = 'is-favorite-icon';
const IS_NOT_IN_FAVORITES_ICON_TEST_ID = 'is-not-favorite-icon';
const TOOLTIP_TITLE = 'Test Tooltip';

const renderCustomAddToFavoriteButton = (props: Partial<TCustomAddToFavoriteButton> = {}) =>
  render(
    <CustomAddToFavoriteButton
      title={TOOLTIP_TITLE}
      isAddedToFav={false}
      onClick={() => {}}
      {...props}
    />,
  );

describe('CustomAddToFavoriteButton', () => {
  it('renders component without error', () => {
    const screen = renderCustomAddToFavoriteButton();
    expect(screen).toMatchSnapshot();
  });

  it('renders with default props', () => {
    const { queryByTestId } = renderCustomAddToFavoriteButton();
    const button = queryByTestId(BUTTON_TEST_ID);

    expect(button).toHaveClass('custom-add-to-favorite-button');
    expect(button).toBeEnabled();
  });

  it('renders not-in-favorites icon when isAddedToFav is false', () => {
    const { queryByTestId } = renderCustomAddToFavoriteButton();
    const isInFavoritesIcon = queryByTestId(IS_NOT_IN_FAVORITES_ICON_TEST_ID);

    expect(isInFavoritesIcon).toBeInTheDocument();
  });

  it('renders in-favorites icon when isAddedToFav is true', () => {
    const { queryByTestId } = renderCustomAddToFavoriteButton({ isAddedToFav: true });
    const isInFavoritesIcon = queryByTestId(IS_IN_FAVORITES_ICON_TEST_ID);

    expect(isInFavoritesIcon).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = renderCustomAddToFavoriteButton({ onClick: handleClick });

    const button = getByTestId(BUTTON_TEST_ID);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
