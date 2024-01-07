import { EAlbumKeys } from '@/types/album';
import { EMusicTrackKeys } from '@/types/music-track';

export const mockSongs = [
  {
    [EMusicTrackKeys.TRACK_ID]: 1,
    [EMusicTrackKeys.ARTIST_ID]: 1,
    [EMusicTrackKeys.COLLECTION_ID]: 1,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/1',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack1',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist1',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName1',
    [EMusicTrackKeys.TRACK_TIME_MILLIS]: 30000,
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 2,
    [EMusicTrackKeys.ARTIST_ID]: 2,
    [EMusicTrackKeys.COLLECTION_ID]: 2,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/2',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url2.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack2',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist2',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName2',
    [EMusicTrackKeys.TRACK_TIME_MILLIS]: 30000,
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 3,
    [EMusicTrackKeys.ARTIST_ID]: 3,
    [EMusicTrackKeys.COLLECTION_ID]: 3,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/3',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url3.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack3',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist3',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName3',
    [EMusicTrackKeys.TRACK_TIME_MILLIS]: 30000,
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 4,
    [EMusicTrackKeys.ARTIST_ID]: 4,
    [EMusicTrackKeys.COLLECTION_ID]: 4,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/4',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url4.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack4',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist4',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName4',
    [EMusicTrackKeys.TRACK_TIME_MILLIS]: 30000,
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 5,
    [EMusicTrackKeys.ARTIST_ID]: 5,
    [EMusicTrackKeys.COLLECTION_ID]: 5,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/5',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url5.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack5',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist5',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName5',
    [EMusicTrackKeys.TRACK_TIME_MILLIS]: 30000,
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 6,
    [EMusicTrackKeys.ARTIST_ID]: 6,
    [EMusicTrackKeys.COLLECTION_ID]: 6,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/6',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url6.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack6',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist6',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName6',
    [EMusicTrackKeys.TRACK_TIME_MILLIS]: 30000,
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 7,
    [EMusicTrackKeys.ARTIST_ID]: 7,
    [EMusicTrackKeys.COLLECTION_ID]: 7,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/7',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url7.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack7',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist7',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName7',
    [EMusicTrackKeys.TRACK_TIME_MILLIS]: 30000,
  },
];

export const mockSongItem = mockSongs[0];

export const mockAlbums = [
  {
    [EAlbumKeys.COLLECTION_ID]: 1,
    [EAlbumKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EAlbumKeys.COLLECTION_NAME]: 'CollectionName',
    [EAlbumKeys.RELEASE_DATE]: '2020-01-01',
    [EAlbumKeys.ARTIST_NAME]: 'Test_Artist',
  },
  {
    [EAlbumKeys.COLLECTION_ID]: 2,
    [EAlbumKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EAlbumKeys.COLLECTION_NAME]: 'CollectionName',
    [EAlbumKeys.RELEASE_DATE]: '2020-01-01',
    [EAlbumKeys.ARTIST_NAME]: 'Test_Artist',
  },
  {
    [EAlbumKeys.COLLECTION_ID]: 3,
    [EAlbumKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EAlbumKeys.COLLECTION_NAME]: 'CollectionName',
    [EAlbumKeys.RELEASE_DATE]: '2020-01-01',
    [EAlbumKeys.ARTIST_NAME]: 'Test_Artist',
  },
  {
    [EAlbumKeys.COLLECTION_ID]: 4,
    [EAlbumKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EAlbumKeys.COLLECTION_NAME]: 'CollectionName',
    [EAlbumKeys.RELEASE_DATE]: '2020-01-01',
    [EAlbumKeys.ARTIST_NAME]: 'Test_Artist',
  },
  {
    [EAlbumKeys.COLLECTION_ID]: 5,
    [EAlbumKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EAlbumKeys.COLLECTION_NAME]: 'CollectionName',
    [EAlbumKeys.RELEASE_DATE]: '2020-01-01',
    [EAlbumKeys.ARTIST_NAME]: 'Test_Artist',
  },
  {
    [EAlbumKeys.COLLECTION_ID]: 6,
    [EAlbumKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EAlbumKeys.COLLECTION_NAME]: 'CollectionName',
    [EAlbumKeys.RELEASE_DATE]: '2020-01-01',
    [EAlbumKeys.ARTIST_NAME]: 'Test_Artist',
  },
];

export const mockAlbum = mockAlbums[0];

export const mockMenuInfo = {
  key: '1',
  keyPath: ['1'],
  item: { props: {} } as React.ReactInstance,
  domEvent: {
    stopPropagation: () => {},
  } as unknown as React.MouseEvent<HTMLElement>,
};
