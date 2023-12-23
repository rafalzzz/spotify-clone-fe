import { act, renderHook } from '@testing-library/react-hooks';
import { create } from 'zustand';
import '@testing-library/jest-dom';

import { useMusicPlayerStore } from '@/store/music-player';

import { mockSongs } from '@/consts/mocks';

import { useCurrentSong } from '..';

const createTestMusicPlayerStore = () =>
  create(() => ({
    activeIndex: 0,
    isShuffle: false,
    songsList: [],
    shuffledIndexes: [],
  }));

jest.mock('@/store/music-player', () => {
  return {
    useMusicPlayerStore: createTestMusicPlayerStore(),
  };
});

describe('useCurrentSong', () => {
  beforeEach(() => {
    useMusicPlayerStore.setState({
      songsList: mockSongs,
    });
  });

  it('returns the correct song at default state', () => {
    const { result } = renderHook(() => useCurrentSong());
    expect(result.current).toEqual(mockSongs[0]);
  });

  it('returns the correct song in shuffle mode', () => {
    act(() => {
      useMusicPlayerStore.setState({
        isShuffle: true,
        shuffledIndexes: [2, 1, 0],
      });
    });

    const { result } = renderHook(() => useCurrentSong());
    expect(result.current).toEqual(mockSongs[2]);
  });

  it('returns the correct song for different active indices', () => {
    act(() => {
      useMusicPlayerStore.setState({
        activeIndex: 1,
        isShuffle: false,
      });
    });

    const { result } = renderHook(() => useCurrentSong());
    expect(result.current).toEqual(mockSongs[1]);
  });

  it('handles an empty song list', () => {
    act(() => {
      useMusicPlayerStore.setState({
        songsList: [],
      });
    });

    const { result } = renderHook(() => useCurrentSong());
    expect(result.current).toBeUndefined();
  });

  it('handles an active index out of range', () => {
    act(() => {
      useMusicPlayerStore.setState({
        activeIndex: mockSongs.length,
      });
    });

    const { result } = renderHook(() => useCurrentSong());
    expect(result.current).toBeUndefined();
  });

  it('toggles between shuffle and regular mode correctly', () => {
    act(() => {
      useMusicPlayerStore.setState({
        isShuffle: true,
        shuffledIndexes: [2, 1, 0],
        activeIndex: 0,
      });
    });

    const { result: shuffleResult } = renderHook(() => useCurrentSong());
    expect(shuffleResult.current).toEqual(mockSongs[2]);

    act(() => {
      useMusicPlayerStore.setState({
        isShuffle: false,
      });
    });

    const { result: regularResult } = renderHook(() => useCurrentSong());
    expect(regularResult.current).toEqual(mockSongs[0]);
  });
});
