import { render, waitFor } from '@testing-library/react';

import { Album } from '@/shared/interfaces/album';
import { Artist } from '@/shared/interfaces/artist';
import { MusicTrack } from '@/shared/interfaces/music-track';

import MainContent from '..';

const props = {
  artists: [
    {
      artistId: 1,
      artistName: 'Test_Artist1',
    },
  ] as Artist[],
  albums: [
    {
      collectionId: 1,
      artworkUrl60: '/some-image-url1.jpg',
      collectionName: 'CollectionName',
      releaseDate: '2020-01-01',
      artistName: 'Test_Artist',
    },
  ] as Album[],
  songs: [
    {
      trackId: 1,
      artworkUrl60: '/some-image-url1.jpg',
      trackName: 'TestTrack',
      artistName: 'Test_Artist',
      collectionName: 'collectionName',
    },
  ] as MusicTrack[],
};

const renderLoveAlbumsSection = () => render(<MainContent {...props} />);

describe('MainContent', () => {
  it('render component without error', async () => {
    const { container } = renderLoveAlbumsSection();

    await waitFor(() => {
      expect(container).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });
});
