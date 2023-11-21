import { render } from '@testing-library/react';

import { MusicTrack } from '@/shared/interfaces/music-track';

import LoveSongsSection from '..';

const mockSongs = [
  {
    trackId: 1,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
    collectionName: 'collectionName',
  },
  {
    trackId: 2,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
    collectionName: 'collectionName',
  },
  {
    trackId: 3,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
    collectionName: 'collectionName',
  },
  {
    trackId: 4,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
    collectionName: 'collectionName',
  },
  {
    trackId: 5,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
    collectionName: 'collectionName',
  },
  {
    trackId: 6,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
    collectionName: 'collectionName',
  },
];

const renderLoveSongsSection = () => render(<LoveSongsSection songs={mockSongs as MusicTrack[]} />);

describe('LoveSongsSection', () => {
  it('render component without error', () => {
    const screen = renderLoveSongsSection();
    expect(screen).toMatchSnapshot();
  });
});
