import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { PlayerButtons } from '../';

jest.mock('@/footer/contexts/music-player-context', () => ({
  useMusicPlayerContext: jest.fn(),
}));

const renderPlayerButtons = () => render(<PlayerButtons />);

const SHUFFLE_BUTTON_TEST_ID = 'shuffle-button';
const PREV_SONG_BUTTON_TEST_ID = 'prev-song-button';
const NEXT_SONG_BUTTON_TEST_ID = 'next-song-button';
const LOOP_BUTTON_TEST_ID = 'loop-button';

const CUSTOM_ICON_BUTTON_ACTIVE_CLASS_NAME = 'custom-icon-button--active';

describe('PlayerButtons', () => {
  const mockSetIsShuffle = jest.fn();
  const mockSetIsLoop = jest.fn();

  const mockedUseMusicPlayerContext = {
    isShuffle: false,
    isLoop: false,
    setIsShuffle: mockSetIsShuffle,
    setIsLoop: mockSetIsLoop,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useMusicPlayerContext as jest.Mock).mockImplementation(() => mockedUseMusicPlayerContext);
  });

  it('should render correctly', () => {
    const { queryByTestId } = renderPlayerButtons();

    expect(queryByTestId(SHUFFLE_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(queryByTestId(PREV_SONG_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(queryByTestId(NEXT_SONG_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(queryByTestId(LOOP_BUTTON_TEST_ID)).toBeInTheDocument();
  });

  it('calls setIsShuffle when shuffle button is clicked', () => {
    const { queryByTestId } = renderPlayerButtons();
    fireEvent.click(queryByTestId(SHUFFLE_BUTTON_TEST_ID) as Element);
    expect(mockSetIsShuffle).toHaveBeenCalledTimes(1);
  });

  it('should show active class for shuffle button when isShuffle is true', () => {
    (useMusicPlayerContext as jest.Mock).mockImplementation(() => ({
      ...mockedUseMusicPlayerContext,
      isShuffle: true,
    }));

    const { queryByTestId } = renderPlayerButtons();
    expect(queryByTestId(SHUFFLE_BUTTON_TEST_ID)).toHaveClass(CUSTOM_ICON_BUTTON_ACTIVE_CLASS_NAME);
  });

  it('calls setIsLoop when loop button is clicked', () => {
    const { queryByTestId } = renderPlayerButtons();
    fireEvent.click(queryByTestId(LOOP_BUTTON_TEST_ID) as Element);
    expect(mockSetIsLoop).toHaveBeenCalledTimes(1);
  });

  it('has active class when loop button is active', () => {
    (useMusicPlayerContext as jest.Mock).mockImplementation(() => ({
      ...mockedUseMusicPlayerContext,
      isLoop: true,
    }));

    const { queryByTestId } = renderPlayerButtons();
    expect(queryByTestId(LOOP_BUTTON_TEST_ID)).toHaveClass(CUSTOM_ICON_BUTTON_ACTIVE_CLASS_NAME);
  });
});
