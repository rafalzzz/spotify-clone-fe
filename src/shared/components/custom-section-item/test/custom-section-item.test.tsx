import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { generateAlbumRedirectionPath } from '@/utils/generate-album-redirection-path';

import { TCustomSectionItem } from '@/types/components';

import { CustomSectionItem } from '../';

const mockOnClick = jest.fn();

const PLAY_BUTTON_TEST_ID = 'custom-section-item-play-button';
const PLAY_ICON_TEST_ID = 'custom-section-item-play-icon';
const PAUSE_ICON_TEST_ID = 'custom-section-item-pause-icon';
const REDIRECTION_TEST_ID = 'custom-section-item-redirection';

const MOCKED_CHILD_CONTENT = 'Mocked Child Content';
const MOCKED_COLLECTION_NAME = 'mocked collection name';
const MOCKED_IMAGE_URL = '/some-image-url.jpg';
const MOCKED_CHILD = <div>{MOCKED_CHILD_CONTENT}</div>;

const renderCustomSectionItem = ({
  isActive = false,
  isPlaying = false,
}: Partial<TCustomSectionItem> = {}) => {
  return render(
    <CustomSectionItem
      collectionName={MOCKED_COLLECTION_NAME}
      imageUrl={MOCKED_IMAGE_URL}
      isActive={isActive}
      isPlaying={isPlaying}
      onClick={mockOnClick}
    >
      {MOCKED_CHILD}
    </CustomSectionItem>,
  );
};

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

  it('album redirection have correct path', () => {
    const { queryByTestId } = renderCustomSectionItem();

    const artistNameElement = queryByTestId(REDIRECTION_TEST_ID);
    expect(artistNameElement).toHaveAttribute(
      'href',
      generateAlbumRedirectionPath(MOCKED_COLLECTION_NAME),
    );
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

  it('displays the play button with correct class when isActive is true', () => {
    const { queryByTestId } = renderCustomSectionItem({ isActive: true });

    const button = queryByTestId(PLAY_BUTTON_TEST_ID);
    expect(button).toHaveClass('custom-section-item__play-button--visible');
  });

  it('displays the PlayCircleFilled icon when isPlaying is equal false', () => {
    const { queryByTestId } = renderCustomSectionItem();

    const playIcon = queryByTestId(PLAY_ICON_TEST_ID);
    expect(playIcon).toBeInTheDocument();
  });

  it('displays the PauseCircleFilled icon when isPlaying and isActive are equal true', () => {
    const { queryByTestId } = renderCustomSectionItem({ isPlaying: true, isActive: true });

    const pauseIcon = queryByTestId(PAUSE_ICON_TEST_ID);
    expect(pauseIcon).toBeInTheDocument();
  });
});
