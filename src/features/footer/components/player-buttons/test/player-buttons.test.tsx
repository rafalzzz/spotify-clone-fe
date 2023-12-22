import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'zustand';

import '@testing-library/jest-dom/extend-expect';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

import { PlayerButtons } from '../';

const createTestMusicPlayerStore = () =>
  create(() => ({
    currentTime: 0,
    playPrevSong: jest.fn(),
    playNextSong: jest.fn(),
  }));

jest.mock('@/store/music-player', () => {
  return {
    useMusicPlayerStore: createTestMusicPlayerStore(),
  };
});

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

  const mockAudioElement = {
    play: jest.fn(),
    pause: jest.fn(),
    duration: 30,
    currentTime: 10,
  };

  const mockRef = {
    current: mockAudioElement,
  };

  const mockedUseMusicPlayerContext = {
    isShuffle: false,
    isLoop: false,
    ref: mockRef,
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
    const { getByTestId } = renderPlayerButtons();
    fireEvent.click(getByTestId(SHUFFLE_BUTTON_TEST_ID));
    expect(mockSetIsShuffle).toHaveBeenCalledTimes(1);
  });

  it('not calls playPrevSong when playPrevSong button is clicked and currentTime is lower than 5', () => {
    const { getByTestId } = renderPlayerButtons();
    const { playPrevSong } = useMusicPlayerStore.getState();

    fireEvent.click(getByTestId(PREV_SONG_BUTTON_TEST_ID));
    expect(playPrevSong).not.toHaveBeenCalled();
  });

  it('calls playPrevSong when playPrevSong button is clicked and currentTime is higher than 5', () => {
    const store = useMusicPlayerStore.getState();
    store.currentTime = 10;

    const { getByTestId } = renderPlayerButtons();

    fireEvent.click(getByTestId(PREV_SONG_BUTTON_TEST_ID));
    expect(store.playPrevSong).toHaveBeenCalledTimes(1);
  });

  it('should show active class for shuffle button when isShuffle is true', () => {
    (useMusicPlayerContext as jest.Mock).mockImplementation(() => ({
      ...mockedUseMusicPlayerContext,
      isShuffle: true,
    }));

    const { queryByTestId } = renderPlayerButtons();
    expect(queryByTestId(SHUFFLE_BUTTON_TEST_ID)).toHaveClass(CUSTOM_ICON_BUTTON_ACTIVE_CLASS_NAME);
  });

  it('calls playNextSong when playNextSong button is clicked', () => {
    const { getByTestId } = renderPlayerButtons();
    const { playNextSong } = useMusicPlayerStore.getState();

    fireEvent.click(getByTestId(NEXT_SONG_BUTTON_TEST_ID));
    expect(playNextSong).toHaveBeenCalledTimes(1);
  });

  it('calls setIsLoop when loop button is clicked', () => {
    const { getByTestId } = renderPlayerButtons();
    fireEvent.click(getByTestId(LOOP_BUTTON_TEST_ID));
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
