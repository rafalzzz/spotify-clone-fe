import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'zustand';

import '@testing-library/jest-dom/extend-expect';

import { useMusicPlayerStore } from '@/store/music-player';

import { PlayerPlayButton } from '..';

const createTestMusicPlayerStore = () =>
  create(() => ({
    isPlaying: false,
    togglePlay: jest.fn(),
  }));

jest.mock('@/store/music-player', () => {
  return {
    useMusicPlayerStore: createTestMusicPlayerStore(),
  };
});

jest.mock('@/footer/contexts/music-player-context', () => ({
  useMusicPlayerContext: jest.fn(),
}));

const renderPlayerPlayButton = () => render(<PlayerPlayButton />);

const PLAY_BUTTON_TEST_ID = 'play-button';

describe('PlayerPlayButton', () => {
  it('should render correctly', () => {
    const { queryByTestId } = renderPlayerPlayButton();

    expect(queryByTestId(PLAY_BUTTON_TEST_ID)).toBeInTheDocument();
  });

  it('should call togglePlay when play button is clicked', () => {
    const { queryByTestId } = renderPlayerPlayButton();
    const { togglePlay } = useMusicPlayerStore.getState();

    fireEvent.click(queryByTestId(PLAY_BUTTON_TEST_ID) as Element);
    expect(togglePlay).toHaveBeenCalled();
  });

  it('should switch between play and pause icons based on isPlaying state', () => {
    const store = useMusicPlayerStore.getState();
    store.isPlaying = true;

    const { queryByTestId } = renderPlayerPlayButton();
    expect(queryByTestId('player-buttons-pause-icon')).toBeInTheDocument();
  });
});
