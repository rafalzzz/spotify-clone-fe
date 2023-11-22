import { render } from '@testing-library/react';

import { Artist } from '@/shared/interfaces/artist';

import { ArtistsSection } from '..';

const mockArtists = [
  {
    artistId: 1,
    artistName: 'Test_Artist1',
  },
  {
    artistId: 2,
    artistName: 'Test_Artist2',
  },
  {
    artistId: 3,
    artistName: 'Test_Artist3',
  },
  {
    artistId: 4,
    artistName: 'Test_Artist4',
  },
  {
    artistId: 5,
    artistName: 'Test_Artist5',
  },
  {
    artistId: 6,
    artistName: 'Test_Artist6',
  },
];

const renderArtistsSection = () => render(<ArtistsSection artists={mockArtists as Artist[]} />);

describe('ArtistsSection', () => {
  it('render component without error', () => {
    const screen = renderArtistsSection();
    expect(screen).toMatchSnapshot();
  });
});
