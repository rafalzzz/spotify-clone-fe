import { render } from '@testing-library/react';

import { useCalculateSectionItemsAmount } from '@/hooks/use-calculate-section-items-amount';

import { Album } from '@/types/album';

import { LoveAlbumsSection } from '..';

jest.mock('@/hooks/use-calculate-section-items-amount', () => ({
  useCalculateSectionItemsAmount: jest.fn(),
}));

const mockAlbums = [
  {
    collectionId: 1,
    artworkUrl100: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 2,
    artworkUrl100: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 3,
    artworkUrl100: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 4,
    artworkUrl100: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 5,
    artworkUrl100: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
  {
    collectionId: 6,
    artworkUrl100: '/some-image-url1.jpg',
    collectionName: 'CollectionName',
    releaseDate: '2020-01-01',
    artistName: 'Test_Artist',
  },
];

const MOCKED_SECTION_ITEMS_COUNT = 3;

const renderLoveAlbumsSection = () => render(<LoveAlbumsSection albums={mockAlbums as Album[]} />);

describe('LoveAlbumsSection', () => {
  beforeAll(() => {
    (useCalculateSectionItemsAmount as jest.Mock).mockReturnValue({
      elementRef: jest.fn(),
      sectionItemsCount: MOCKED_SECTION_ITEMS_COUNT,
    });
  });

  it('render component without error', () => {
    const screen = renderLoveAlbumsSection();
    expect(screen).toMatchSnapshot();
  });

  it('displays the correct number of albums', () => {
    const screen = renderLoveAlbumsSection();

    expect(screen.getAllByRole('listitem').length).toBe(MOCKED_SECTION_ITEMS_COUNT);
  });
});
