import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CustomSectionItem } from '../';

const mockOnClick = jest.fn();

const PLAY_BUTTON_TEST_ID = 'custom-section-item-play-button';
const MOCKED_CHILD_CONTENT = 'Mocked Child Content';
const MOCKED_IMAGE_URL = '/some-image-url.jpg';
const MOCKED_CHILD = <div>{MOCKED_CHILD_CONTENT}</div>;

const renderCustomSectionItem = () =>
  render(
    <CustomSectionItem imageUrl={MOCKED_IMAGE_URL} onClick={mockOnClick}>
      {MOCKED_CHILD}
    </CustomSectionItem>,
  );

describe('CustomSectionItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders component without error', () => {
    const screen = renderCustomSectionItem();
    expect(screen).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const { queryByText } = renderCustomSectionItem();
    expect(queryByText(MOCKED_CHILD_CONTENT)).toBeInTheDocument();
  });

  it('calls onClick when the button is clicked', () => {
    const { queryByTestId } = renderCustomSectionItem();

    const button = queryByTestId(PLAY_BUTTON_TEST_ID);
    fireEvent.click(button as Element);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('renders the image with the correct url', () => {
    const { queryByAltText } = renderCustomSectionItem();
    expect(queryByAltText('image')).toHaveAttribute(
      'src',
      `/_next/image?url=%2F${MOCKED_IMAGE_URL.replace('/', '')}&w=256&q=75`,
    );
  });
});
