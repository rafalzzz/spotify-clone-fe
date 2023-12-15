import { render, waitFor } from '@testing-library/react';

import { TAlbum } from '@/types/album';
import { TArtist } from '@/types/artist';
import { TMusicTrack } from '@/types/music-track';

import MainContent from '..';

const props = {
  artists: [
    {
      artistId: 1,
      artistName: 'Test_Artist1',
    },
  ] as TArtist[],
  albums: [
    {
      collectionId: 1,
      artworkUrl60: '/some-image-url1.jpg',
      collectionName: 'CollectionName',
      releaseDate: '2020-01-01',
      artistName: 'Test_Artist',
    },
  ] as TAlbum[],
  songs: [
    {
      trackId: 1,
      artworkUrl60: '/some-image-url1.jpg',
      trackName: 'TestTrack',
      artistName: 'Test_Artist',
      collectionName: 'collectionName',
    },
  ] as TMusicTrack[],
};

describe('MainContent', () => {
  it('render component without error', async () => {
    const { container } = render(<MainContent {...props} />);

    await waitFor(() => {
      expect(container).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });
});
