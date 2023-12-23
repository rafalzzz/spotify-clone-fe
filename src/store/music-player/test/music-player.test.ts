import { act, renderHook } from '@testing-library/react-hooks';

import { mockSongs } from '@/consts/mocks';

import { useMusicPlayerStore } from '../';

const renderUseMusicPlayerStore = () => renderHook(() => useMusicPlayerStore());

const mockedSongsArr = mockSongs.slice(0, 3);

describe('useMusicPlayerStore', () => {
  it('should toggle play state', () => {
    const { result } = renderUseMusicPlayerStore();

    expect(result.current.isPlaying).toBe(false);

    act(() => {
      result.current.togglePlay();
    });

    expect(result.current.isPlaying).toBe(true);

    act(() => {
      result.current.togglePlay();
    });

    expect(result.current.isPlaying).toBe(false);
  });

  it('should toggle shuffle state', () => {
    const { result } = renderUseMusicPlayerStore();

    expect(result.current.isShuffle).toBe(false);

    act(() => {
      result.current.toggleShuffle();
    });

    expect(result.current.isShuffle).toBe(true);

    act(() => {
      result.current.toggleShuffle();
    });

    expect(result.current.isShuffle).toBe(false);
  });

  it('should toggle loop state', () => {
    const { result } = renderUseMusicPlayerStore();

    expect(result.current.isLoop).toBe(false);

    act(() => {
      result.current.toggleLoop();
    });

    expect(result.current.isLoop).toBe(true);

    act(() => {
      result.current.toggleLoop();
    });

    expect(result.current.isLoop).toBe(false);
  });

  it('should set duration', () => {
    const { result } = renderHook(() => useMusicPlayerStore());
    const mockDuration = 30;

    act(() => {
      result.current.setDuration(mockDuration);
    });

    expect(result.current.duration).toBe(mockDuration);
  });

  it('should set duration', () => {
    const { result } = renderHook(() => useMusicPlayerStore());
    const mockCurrentTime = 15;

    act(() => {
      result.current.setCurrentTime(mockCurrentTime);
    });

    expect(result.current.currentTime).toBe(mockCurrentTime);
  });

  it('should set activeIndex', () => {
    const { result } = renderHook(() => useMusicPlayerStore());
    const mockActiveIndex = 1;

    act(() => {
      result.current.setActiveIndex(mockActiveIndex);
    });

    expect(result.current.activeIndex).toBe(mockActiveIndex);
  });

  it('should play album and update state', () => {
    const { result } = renderUseMusicPlayerStore();

    const mockAlbumId = 1;

    act(() => {
      result.current.playAlbum({ albumId: mockAlbumId, songs: mockedSongsArr });
    });

    expect(result.current.albumId).toBe(mockAlbumId);
    expect(result.current.songsList).toEqual(mockedSongsArr);
    expect(result.current.isPlaying).toBe(true);
    expect(result.current.activeIndex).toBe(0);
    expect(result.current.duration).toBe(0);
    expect(result.current.trackId).toBe(null);
  });

  it('should play prev song and update state', () => {
    const { result } = renderUseMusicPlayerStore();

    // Action to initialize state
    act(() => {
      result.current.playAlbum({ albumId: 0, songs: mockedSongsArr });
    });

    const actionsAndExpectations = [
      { expectedActiveIndex: mockedSongsArr.length - 1, expectedCurrentTime: 0 },
      { expectedActiveIndex: mockedSongsArr.length - 2, expectedCurrentTime: 0 },
      { expectedActiveIndex: mockedSongsArr.length - 3, expectedCurrentTime: 0 },
    ];

    actionsAndExpectations.forEach(({ expectedActiveIndex, expectedCurrentTime }) => {
      act(() => {
        result.current.playPrevSong();
      });

      expect(result.current.activeIndex).toBe(expectedActiveIndex);
      expect(result.current.currentTime).toBe(expectedCurrentTime);
    });
  });

  it('should play next song and update state', () => {
    const { result } = renderUseMusicPlayerStore();

    // Action to initialize state
    act(() => {
      result.current.playAlbum({ albumId: 0, songs: mockedSongsArr });
    });

    const actionsAndExpectations = [
      { expectedActiveIndex: 1, expectedCurrentTime: 0 },
      { expectedActiveIndex: 2, expectedCurrentTime: 0 },
      { expectedActiveIndex: 0, expectedCurrentTime: 0 },
    ];

    actionsAndExpectations.forEach(({ expectedActiveIndex, expectedCurrentTime }) => {
      act(() => {
        result.current.playNextSong();
      });

      expect(result.current.activeIndex).toBe(expectedActiveIndex);
      expect(result.current.currentTime).toBe(expectedCurrentTime);
    });
  });
});
