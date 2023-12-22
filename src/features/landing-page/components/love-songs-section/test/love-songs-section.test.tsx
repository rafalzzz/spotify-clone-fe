import { render } from '@testing-library/react';

import { EMusicTrackKeys, TMusicTrack } from '@/types/music-track';

import { LoveSongsSection } from '..';

jest.mock('@/store/section', () => ({
  useSectionStore: jest.fn(),
}));

const mockSongs = [
  {
    [EMusicTrackKeys.TRACK_ID]: 1,
    [EMusicTrackKeys.ARTIST_ID]: 1,
    [EMusicTrackKeys.COLLECTION_ID]: 1,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/1',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 2,
    [EMusicTrackKeys.ARTIST_ID]: 2,
    [EMusicTrackKeys.COLLECTION_ID]: 2,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/2',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 3,
    [EMusicTrackKeys.ARTIST_ID]: 3,
    [EMusicTrackKeys.COLLECTION_ID]: 3,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/3',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 4,
    [EMusicTrackKeys.ARTIST_ID]: 4,
    [EMusicTrackKeys.COLLECTION_ID]: 4,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/4',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 5,
    [EMusicTrackKeys.ARTIST_ID]: 5,
    [EMusicTrackKeys.COLLECTION_ID]: 5,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/5',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
  {
    [EMusicTrackKeys.TRACK_ID]: 6,
    [EMusicTrackKeys.ARTIST_ID]: 6,
    [EMusicTrackKeys.COLLECTION_ID]: 6,
    [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/6',
    [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
    [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
    [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
    [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  },
];

const renderLoveSongsSection = () =>
  render(<LoveSongsSection songs={mockSongs as TMusicTrack[]} />);

describe('LoveSongsSection', () => {
  it('render component without error', () => {
    const screen = renderLoveSongsSection();
    expect(screen).toMatchSnapshot();
  });
});
