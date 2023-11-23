import { render } from '@testing-library/react';

import { Album } from '@/interfaces/album';

import { LoveAlbumsSection } from '..';

const mockAlbums = [
  {
    collectionId: 1,
    artworkUrl60: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 2,
    artworkUrl60: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 3,
    artworkUrl60: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 4,
    artworkUrl60: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 5,
    artworkUrl60: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 6,
    artworkUrl60: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
];

const renderLoveAlbumsSection = () => render(<LoveAlbumsSection albums={mockAlbums as Album[]} />);

describe('LoveAlbumsSection', () => {
  it('render component without error', () => {
    const screen = renderLoveAlbumsSection();
    expect(screen).toMatchSnapshot();
  });
});
