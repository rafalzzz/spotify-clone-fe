import { renderHook, act } from '@testing-library/react-hooks';
import { SyntheticEvent } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

import { mockSongs } from '@/consts/mocks';

import { useAudio } from '../';

jest.mock('@/footer/contexts/music-player-context', () => ({
  useMusicPlayerContext: jest.fn(),
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

const mockedSongsList = mockSongs.slice(0, 2);

const renderUseAudio = () => renderHook(() => useAudio());

describe('useAudio', () => {
  beforeEach(() => {
    (useMusicPlayerContext as jest.Mock).mockReturnValue(mockContext);

    useMusicPlayerStore.setState({
      activeIndex: 1,
      songsList: mockedSongsList,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns the correct currentSong based on activeIndex', () => {
    const { result } = renderUseAudio();
    const { songsList, activeIndex } = useMusicPlayerStore.getState();
    expect(result.current.currentSong).toEqual(songsList[activeIndex]);
  });

  it('calls setDuration with correct value on onLoadedMetadata', () => {
    const { result } = renderUseAudio();
    const { setDuration } = useMusicPlayerStore.getState();

    act(() => {
      const event = { target: mockAudioElement } as unknown as SyntheticEvent<HTMLAudioElement>;
      result.current.onLoadedMetadata(event);
    });

    expect(setDuration).toHaveBeenCalledWith(mockAudioElement.duration);
  });

  it('calls setCurrentTime with correct value on onTimeUpdate', () => {
    mockAudioElement.currentTime = 10;
    const { result } = renderUseAudio();
    const { setCurrentTime } = useMusicPlayerStore.getState();

    act(() => {
      const event = { target: mockAudioElement } as unknown as SyntheticEvent<HTMLAudioElement>;
      result.current.onTimeUpdate(event);
    });

    expect(setCurrentTime).toHaveBeenCalledWith(mockAudioElement.currentTime);
  });

  it('calls play or pause on the audio ref based on isPlaying', () => {
    const { rerender } = renderUseAudio();
    const store = useMusicPlayerStore.getState();

    store.isPlaying = true;
    rerender();
    expect(mockAudioElement.play).toHaveBeenCalled();

    mockAudioElement.play.mockClear();

    store.isPlaying = false;
    rerender();
    expect(mockAudioElement.pause).toHaveBeenCalled();
  });

  it('calls togglePlay correctly when is last song on onEnded', () => {
    const { result } = renderUseAudio();
    const { togglePlay } = useMusicPlayerStore.getState();

    act(() => {
      result.current.onEnded();
    });

    expect(togglePlay).toHaveBeenCalled();
  });

  it('calls playNextSong when the album is being played', () => {
    const store = useMusicPlayerStore.getState();
    store.albumId = 1;
    store.activeIndex = 0;

    const { result } = renderUseAudio();

    act(() => {
      result.current.onEnded();
    });

    expect(store.playNextSong).toHaveBeenCalled();
  });
});
