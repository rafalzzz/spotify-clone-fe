import { renderHook, act } from '@testing-library/react-hooks';
import { SyntheticEvent } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

import { TUseMusicPlayerStore } from '@/types/store';

import { mockSongItem } from '@/consts/mocks';

import { useAudio } from '../';

jest.mock('@/footer/contexts/music-player-context', () => ({
  useMusicPlayerContext: jest.fn(),
}));

jest.mock('@/store/music-player', () => ({
  useMusicPlayerStore: jest.fn(),
}));

const mockAudioElement = {
  play: jest.fn(),
  pause: jest.fn(),
  duration: 30,
  currentTime: 0,
};

const mockRef = {
  current: mockAudioElement,
};

const mockContext = {
  ref: mockRef,
};

const renderUseAudio = () => renderHook(() => useAudio());

describe('useAudio', () => {
  const mockStore = {
    isPlaying: false,
    isLoop: false,
    albumId: 0,
    activeIndex: 1,
    songsList: [mockSongItem, mockSongItem],
    setDuration: jest.fn(),
    setCurrentTime: jest.fn(),
    togglePlay: jest.fn(),
    playNextSong: jest.fn(),
  };

  beforeEach(() => {
    (useMusicPlayerContext as jest.Mock).mockReturnValue(mockContext);
    (useMusicPlayerStore as unknown as jest.Mock<Partial<TUseMusicPlayerStore>>).mockReturnValue(
      mockStore,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns the correct currentSong based on activeIndex', () => {
    const { result } = renderUseAudio();
    expect(result.current.currentSong).toEqual(mockStore.songsList[mockStore.activeIndex]);
  });

  it('calls setDuration with correct value on onLoadedMetadata', () => {
    const { result } = renderUseAudio();

    act(() => {
      const event = { target: mockAudioElement } as unknown as SyntheticEvent<HTMLAudioElement>;
      result.current.onLoadedMetadata(event);
    });

    expect(mockStore.setDuration).toHaveBeenCalledWith(mockAudioElement.duration);
  });

  it('calls setCurrentTime with correct value on onTimeUpdate', () => {
    mockAudioElement.currentTime = 10;
    const { result } = renderUseAudio();

    act(() => {
      const event = { target: mockAudioElement } as unknown as SyntheticEvent<HTMLAudioElement>;
      result.current.onTimeUpdate(event);
    });

    expect(mockStore.setCurrentTime).toHaveBeenCalledWith(mockAudioElement.currentTime);
  });

  it('calls play or pause on the audio ref based on isPlaying', () => {
    const { rerender } = renderUseAudio();

    mockStore.isPlaying = true;
    rerender();
    expect(mockAudioElement.play).toHaveBeenCalled();

    mockAudioElement.play.mockClear();

    mockStore.isPlaying = false;
    rerender();
    expect(mockAudioElement.pause).toHaveBeenCalled();
  });

  it('calls togglePlay correctly when is last song on onEnded', () => {
    const { result } = renderUseAudio();

    act(() => {
      result.current.onEnded();
    });

    expect(mockStore.togglePlay).toHaveBeenCalled();
  });

  it('calls playNextSong when the album is being played', () => {
    mockStore.albumId = 1;
    mockStore.activeIndex = 0;

    const { result } = renderUseAudio();

    act(() => {
      result.current.onEnded();
    });

    expect(mockStore.playNextSong).toHaveBeenCalled();
  });
});
