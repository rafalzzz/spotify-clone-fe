import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'zustand';

import '@testing-library/jest-dom/extend-expect';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

import { mockSongItem } from '@/consts/mocks';

import { PlayerButtons, MIN_TIME_TO_RESET_CURRENT_TIME } from '../';

const createTestMusicPlayerStore = () =>
  create(() => ({
    currentTime: 0,
    isShuffle: false,
    isLoop: false,
    songsList: [],
    toggleShuffle: jest.fn(),
    playPrevSong: jest.fn(),
    playNextSong: jest.fn(),
    toggleLoop: jest.fn(),
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
  const mockAudioElement = {
    play: jest.fn(),
    pause: jest.fn(),
    duration: 30,
    currentTime: 10,
  };

  const mockRef = {
    current: mockAudioElement,
  };

  const mockContext = {
    ref: mockRef,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useMusicPlayerContext as jest.Mock).mockImplementation(() => mockContext);

    const store = useMusicPlayerStore.getState();
    store.songsList = [mockSongItem, mockSongItem];
  });

  it('should render correctly', () => {
    const { queryByTestId } = renderPlayerButtons();

    expect(queryByTestId(SHUFFLE_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(queryByTestId(PREV_SONG_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(queryByTestId(NEXT_SONG_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(queryByTestId(LOOP_BUTTON_TEST_ID)).toBeInTheDocument();
  });

  it('calls toggleShuffle when shuffle button is clicked', () => {
    const { getByTestId } = renderPlayerButtons();
    const { toggleShuffle } = useMusicPlayerStore.getState();

    fireEvent.click(getByTestId(SHUFFLE_BUTTON_TEST_ID));
    expect(toggleShuffle).toHaveBeenCalledTimes(1);
  });

  it('calls playPrevSong when playPrevSong button is clicked and currentTime is lower than MIN_TIME_TO_RESET_CURRENT_TIME', () => {
    const { getByTestId } = renderPlayerButtons();
    const { playPrevSong } = useMusicPlayerStore.getState();

    fireEvent.click(getByTestId(PREV_SONG_BUTTON_TEST_ID));
    expect(playPrevSong).toHaveBeenCalledTimes(1);
  });

  it('not calls playPrevSong when playPrevSong button is clicked and currentTime is higher than MIN_TIME_TO_RESET_CURRENT_TIME', () => {
    const store = useMusicPlayerStore.getState();
    store.currentTime = MIN_TIME_TO_RESET_CURRENT_TIME + 5;

    const { getByTestId } = renderPlayerButtons();

    fireEvent.click(getByTestId(PREV_SONG_BUTTON_TEST_ID));
    expect(store.playPrevSong).not.toHaveBeenCalled();
  });

  it('should show active class for shuffle button when isShuffle is true', () => {
    const store = useMusicPlayerStore.getState();
    store.isShuffle = true;

    const { queryByTestId } = renderPlayerButtons();
    expect(queryByTestId(SHUFFLE_BUTTON_TEST_ID)).toHaveClass(CUSTOM_ICON_BUTTON_ACTIVE_CLASS_NAME);
  });

  it('calls playNextSong when playNextSong button is clicked', () => {
    const { getByTestId } = renderPlayerButtons();
    const { playNextSong } = useMusicPlayerStore.getState();

    fireEvent.click(getByTestId(NEXT_SONG_BUTTON_TEST_ID));
    expect(playNextSong).toHaveBeenCalledTimes(1);
  });

  it('calls toggleLoop when loop button is clicked', () => {
    const { getByTestId } = renderPlayerButtons();
    const { toggleLoop } = useMusicPlayerStore.getState();

    fireEvent.click(getByTestId(LOOP_BUTTON_TEST_ID));
    expect(toggleLoop).toHaveBeenCalledTimes(1);
  });

  it('has active class when loop button is active', () => {
    const store = useMusicPlayerStore.getState();
    store.isLoop = true;

    const { queryByTestId } = renderPlayerButtons();
    expect(queryByTestId(LOOP_BUTTON_TEST_ID)).toHaveClass(CUSTOM_ICON_BUTTON_ACTIVE_CLASS_NAME);
  });

  it('not calls playPrevSong or playNextSong when songList.length is equal 1', () => {
    const store = useMusicPlayerStore.getState();
    store.songsList = [mockSongItem];

    const { getByTestId } = renderPlayerButtons();

    fireEvent.click(getByTestId(PREV_SONG_BUTTON_TEST_ID));
    expect(store.playPrevSong).not.toHaveBeenCalled();

    fireEvent.click(getByTestId(NEXT_SONG_BUTTON_TEST_ID));
    expect(store.playNextSong).not.toHaveBeenCalled();
  });
});
