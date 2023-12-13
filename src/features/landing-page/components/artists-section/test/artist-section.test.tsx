import { render } from '@testing-library/react';

import { TArtist, EArtistKeys } from '@/types/artist';

import { ArtistsSection } from '..';

const mockArtists = [
  {
    [EArtistKeys.ARTIST_ID]: 1,
    [EArtistKeys.ARTIST_NAME]: 'Test_Artist1',
  },
  {
    [EArtistKeys.ARTIST_ID]: 2,
    [EArtistKeys.ARTIST_NAME]: 'Test_Artist2',
  },
  {
    [EArtistKeys.ARTIST_ID]: 3,
    [EArtistKeys.ARTIST_NAME]: 'Test_Artist3',
  },
  {
    [EArtistKeys.ARTIST_ID]: 4,
    [EArtistKeys.ARTIST_NAME]: 'Test_Artist4',
  },
  {
    [EArtistKeys.ARTIST_ID]: 5,
    [EArtistKeys.ARTIST_NAME]: 'Test_Artist5',
  },
  {
    [EArtistKeys.ARTIST_ID]: 6,
    [EArtistKeys.ARTIST_NAME]: 'Test_Artist6',
  },
];

const renderArtistsSection = () => render(<ArtistsSection artists={mockArtists as TArtist[]} />);

describe('ArtistsSection', () => {
  it('render component without error', () => {
    const screen = renderArtistsSection();
    expect(screen).toMatchSnapshot();
  });
});
