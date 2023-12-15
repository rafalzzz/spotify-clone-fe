import { render } from '@testing-library/react';

import { EMusicTrackKeys, TMusicTrack } from '@/types/music-track';

import { LoveSongsSection } from '..';

const mockSongs = [
  {
    [EMusicTrackKeys.TRACK_ID]: 1,
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 2,
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 3,
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 4,
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 5,
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 6,
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
];

describe('LoveSongsSection', () => {
  it('render component without error', () => {
    const screen = render(<LoveSongsSection songs={mockSongs as TMusicTrack[]} />);
    expect(screen).toMatchSnapshot();
  });
});
