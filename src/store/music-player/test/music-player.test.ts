import { act, renderHook } from '@testing-library/react-hooks';

import { EMusicTrackKeys } from '@/types/music-track';

import { useMusicPlayerStore } from '../';

const renderUseMusicPlayerStore = () => renderHook(() => useMusicPlayerStore());

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

  it('should change song and update state', () => {
    const { result } = renderUseMusicPlayerStore();

    const mockActiveIndex = 0;
    const mockSongs = [
      {
        [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist-0',
        [EMusicTrackKeys.TRACK_NAME]: 'TestTrack-0',
        [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/0',
        [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url0.jpg',
      },
      {
        [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist-1',
        [EMusicTrackKeys.TRACK_NAME]: 'TestTrack-1',
        [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/1',
        [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
      },
      {
        [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist-2',
        [EMusicTrackKeys.TRACK_NAME]: 'TestTrack-2',
        [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/2',
        [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url2.jpg',
      },
    ];

    act(() => {
      result.current.changeSong({ activeIndex: mockActiveIndex, songs: mockSongs });
    });

    expect(result.current.activeIndex).toBe(mockActiveIndex);
    expect(result.current.songsList).toEqual(mockSongs);
    expect(result.current.isPlaying).toBe(true);
    expect(result.current.duration).toBe(0);
  });

  it('should set duration', () => {
    const { result } = renderHook(() => useMusicPlayerStore());
    const mockDuration = 30;

    act(() => {
      result.current.setDuration(mockDuration);
    });

    expect(result.current.duration).toBe(mockDuration);
  });
});
