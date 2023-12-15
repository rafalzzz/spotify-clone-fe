import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { EMusicTrackKeys, TMusicTrack } from '@/types/music-track';

import { CustomSongPlayButton } from '..';

const mockSong = {
  [EMusicTrackKeys.TRACK_ID]: 2,
  [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
  [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
  [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
  [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
};

describe('CustomSectionItem', () => {
  it('renders component without error', () => {
    const screen = render(<CustomSongPlayButton song={mockSong as TMusicTrack} />);
    expect(screen).toMatchSnapshot();
  });
});
