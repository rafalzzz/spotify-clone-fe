import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TCustomSectionItemPlayButton } from '@/types/components';

import { CustomSectionItemPlayButton } from '..';

const mockOnClick = jest.fn();

const PLAY_BUTTON_TEST_ID = 'custom-section-item-play-button';
const PLAY_ICON_TEST_ID = 'custom-section-item-play-icon';
const PAUSE_ICON_TEST_ID = 'custom-section-item-pause-icon';

const renderCustomSectionItemPlayButton = ({
  isActive = false,
  isPlaying = false,
}: Partial<TCustomSectionItemPlayButton> = {}) => {
  return render(
    <CustomSectionItemPlayButton isActive={isActive} isPlaying={isPlaying} onClick={mockOnClick} />,
  );
};

describe('CustomSectionItemPlayButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders component without error', () => {
    const screen = renderCustomSectionItemPlayButton();
    expect(screen).toMatchSnapshot();
  });

  it('calls onClick when the button is clicked', () => {
    const { queryByTestId } = renderCustomSectionItemPlayButton();

    const button = queryByTestId(PLAY_BUTTON_TEST_ID);
    fireEvent.click(button as Element);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('displays the play button with correct class when isActive is true', () => {
    const { queryByTestId } = renderCustomSectionItemPlayButton({ isActive: true });

    const button = queryByTestId(PLAY_BUTTON_TEST_ID);
    expect(button).toHaveClass('custom-section-item-play-button--visible');
  });

  it('displays the PlayCircleFilled icon when isPlaying is equal false', () => {
    const { queryByTestId } = renderCustomSectionItemPlayButton();

    const playIcon = queryByTestId(PLAY_ICON_TEST_ID);
    expect(playIcon).toBeInTheDocument();
  });

  it('displays the PauseCircleFilled icon when isPlaying and isActive are equal true', () => {
    const { queryByTestId } = renderCustomSectionItemPlayButton({
      isPlaying: true,
      isActive: true,
    });

    const pauseIcon = queryByTestId(PAUSE_ICON_TEST_ID);
    expect(pauseIcon).toBeInTheDocument();
  });
});
