import { renderHook, act } from '@testing-library/react-hooks';

import { useMusicPlayerStore } from '@/store/music-player';

import { EMusicTrackKeys } from '@/types/music-track';
import { TUseMusicPlayerStore } from '@/types/store';

import { useLoveSongsSection } from '../';

jest.mock('@/store/music-player', () => ({
  useMusicPlayerStore: jest.fn(),
}));

const renderUseLoveSongsSection = () => renderHook(() => useLoveSongsSection());

describe('useLoveSongsSection', () => {
  const mockTogglePlay = jest.fn();
  const mockChangeSong = jest.fn();
  const mockSongsList = [
    {
      [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
      [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
      [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/1',
      [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    },
  ];

  beforeEach(() => {
    (useMusicPlayerStore as unknown as jest.Mock<Partial<TUseMusicPlayerStore>>).mockReturnValue({
      isPlaying: false,
      activeIndex: 0,
      songsList: mockSongsList,
      changeSong: mockChangeSong,
      togglePlay: mockTogglePlay,
    });
  });

  it('calls togglePlay when the same song is clicked', () => {
    const { result } = renderUseLoveSongsSection();

    act(() => {
      result.current.handleOnClick(mockSongsList[0]);
    });

    expect(mockTogglePlay).toHaveBeenCalled();
  });

  it('calls changeSong with the correct arguments when a different song is clicked', () => {
    const { result } = renderUseLoveSongsSection();

    const newSong = {
      [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
      [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
      [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/2',
      [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url2.jpg',
    };

    act(() => {
      result.current.handleOnClick(newSong);
    });

    expect(mockChangeSong).toHaveBeenCalledWith({ activeIndex: 0, songs: [newSong] });
  });
});
