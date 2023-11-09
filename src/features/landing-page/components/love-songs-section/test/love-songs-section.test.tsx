import { render } from '@testing-library/react';

import { useCalculateSectionItemsAmount } from '@/hooks/use-calculate-section-items-amount';

import { MusicTrack } from '@/types/music-track';

import { LoveSongsSection } from '..';

jest.mock('@/hooks/use-calculate-section-items-amount', () => ({
  useCalculateSectionItemsAmount: jest.fn(),
}));

const mockSongs = [
  {
    trackId: 1,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
  },
  {
    trackId: 2,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
  },
  {
    trackId: 3,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
  },
  {
    trackId: 4,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
  },
  {
    trackId: 5,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
  },
  {
    trackId: 6,
    artworkUrl100: '/some-image-url1.jpg',
    trackName: 'TestTrack',
    artistName: 'Test_Artist',
  },
];

const renderLoveSongsSection = () => render(<LoveSongsSection songs={mockSongs as MusicTrack[]} />);

describe('LoveSongsSection', () => {
  beforeAll(() => {
    (useCalculateSectionItemsAmount as jest.Mock).mockReturnValue({
      elementRef: jest.fn(),
      sectionItemsCount: 3,
    });
  });

  it('render component without error', () => {
    const screen = renderLoveSongsSection();
    expect(screen).toMatchSnapshot();
  });

  it('displays the correct number of songs', () => {
    const screen = renderLoveSongsSection();

    expect(screen.getAllByRole('listitem').length).toBe(3);
  });
});
