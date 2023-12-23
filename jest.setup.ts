import { create } from 'zustand';

import { MockResizeObserver } from '@/types/utils';

jest.mock('antd');

beforeAll(() => {
  window.HTMLMediaElement.prototype.play = jest.fn();
  window.HTMLMediaElement.prototype.pause = jest.fn();

  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(function (this: MockResizeObserver) {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
  }),
});

const createMusicPlayerStore = () =>
  create(() => ({
    isPlaying: false,
    isShuffle: false,
    isLoop: false,
    duration: 0,
    currentTime: 0,
    activeIndex: 0,
    songsList: [],
    shuffledIndexes: [],
    trackId: null,
    albumId: null,
    togglePlay: jest.fn(),
    toggleShuffle: jest.fn(),
    toggleLoop: jest.fn(),
    setDuration: jest.fn(),
    setCurrentTime: jest.fn(),
    setActiveIndex: jest.fn(),
    playSong: jest.fn(),
    playAlbum: jest.fn(),
    playPrevSong: jest.fn(),
    playNextSong: jest.fn(),
  }));

jest.mock('@/store/music-player', () => {
  return {
    useMusicPlayerStore: createMusicPlayerStore(),
  };
});
