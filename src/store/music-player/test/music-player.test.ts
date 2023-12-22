import { act, renderHook } from '@testing-library/react-hooks';

import { EMusicTrackKeys } from '@/types/music-track';

import { useMusicPlayerStore } from '../';

const mockSongs = [
  {
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist-0',
    [EMusicTrackKeys.COLLECTION_NAME]: 'TestCollection-0',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack-0',
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/0',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url0.jpg',
    [EMusicTrackKeys.ARTIST_ID]: 1,
    [EMusicTrackKeys.COLLECTION_ID]: 1,
    [EMusicTrackKeys.TRACK_ID]: 1,
  },
  {
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist-1',
    [EMusicTrackKeys.COLLECTION_NAME]: 'TestCollection-1',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack-1',
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/1',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.ARTIST_ID]: 2,
    [EMusicTrackKeys.COLLECTION_ID]: 2,
    [EMusicTrackKeys.TRACK_ID]: 2,
  },
  {
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist-2',
    [EMusicTrackKeys.COLLECTION_NAME]: 'TestCollection-2',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack-2',
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/2',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url2.jpg',
    [EMusicTrackKeys.ARTIST_ID]: 3,
    [EMusicTrackKeys.COLLECTION_ID]: 3,
    [EMusicTrackKeys.TRACK_ID]: 3,
  },
];

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

  it('should set duration', () => {
    const { result } = renderHook(() => useMusicPlayerStore());
    const mockDuration = 30;

    act(() => {
      result.current.setDuration(mockDuration);
    });

    expect(result.current.duration).toBe(mockDuration);
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
      result.current.playAlbum({ albumId: mockAlbumId, songs: mockSongs });
    });

    expect(result.current.albumId).toBe(mockAlbumId);
    expect(result.current.songsList).toEqual(mockSongs);
    expect(result.current.isPlaying).toBe(true);
    expect(result.current.activeIndex).toBe(0);
    expect(result.current.duration).toBe(0);
    expect(result.current.trackId).toBe(null);
  });
});
