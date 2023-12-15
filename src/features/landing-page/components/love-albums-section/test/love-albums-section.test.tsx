import { render } from '@testing-library/react';

import { TAlbum, EAlbumKeys } from '@/types/album';

import { LoveAlbumsSection } from '..';

const mockAlbums = [
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

describe('LoveAlbumsSection', () => {
  it('render component without error', () => {
    const screen = render(<LoveAlbumsSection albums={mockAlbums as TAlbum[]} />);
    expect(screen).toMatchSnapshot();
  });
});
