import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { useMusicPlayerStore } from '@/store/music-player';

import { PlayerPlayButton } from '..';

jest.mock('@/store/music-player', () => ({
  useMusicPlayerStore: jest.fn() as unknown as typeof useMusicPlayerStore,
}));

jest.mock('@/footer/contexts/music-player-context', () => ({
  useMusicPlayerContext: jest.fn(),
}));

const renderPlayerPlayButton = () => render(<PlayerPlayButton />);

const PLAY_BUTTON_TEST_ID = 'play-button';

describe('PlayerPlayButton', () => {
  const mockTogglePlay = jest.fn();

  const mockedUseMusicPlayerStoreProps = {
    isPlaying: false,
    togglePlay: mockTogglePlay,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useMusicPlayerStore as unknown as jest.Mock).mockImplementation(
      () => mockedUseMusicPlayerStoreProps,
    );
  });

  it('should render correctly', () => {
    const { queryByTestId } = renderPlayerPlayButton();

    expect(queryByTestId(PLAY_BUTTON_TEST_ID)).toBeInTheDocument();
  });

  it('should call togglePlay when play button is clicked', () => {
    const { queryByTestId } = renderPlayerPlayButton();

    fireEvent.click(queryByTestId(PLAY_BUTTON_TEST_ID) as Element);
    expect(mockTogglePlay).toHaveBeenCalled();
  });

  it('should switch between play and pause icons based on isPlaying state', () => {
    (useMusicPlayerStore as jest.MockedFunction<typeof useMusicPlayerStore>).mockImplementation(
      () => ({
        ...mockedUseMusicPlayerStoreProps,
        isPlaying: true,
      }),
    );

    const { queryByTestId } = renderPlayerPlayButton();
    expect(queryByTestId('player-buttons-pause-icon')).toBeInTheDocument();
  });
});
