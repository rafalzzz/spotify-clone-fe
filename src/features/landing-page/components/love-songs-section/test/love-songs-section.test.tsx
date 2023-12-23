import { render } from '@testing-library/react';

import { TMusicTrack } from '@/types/music-track';

import { mockSongs } from '@/consts/mocks';

import { LoveSongsSection } from '..';

jest.mock('@/store/section', () => ({
  useSectionStore: jest.fn(),
}));

const renderLoveSongsSection = () =>
  render(<LoveSongsSection songs={mockSongs as TMusicTrack[]} />);

describe('LoveSongsSection', () => {
  it('render component without error', () => {
    const screen = renderLoveSongsSection();
    expect(screen).toMatchSnapshot();
  });
});
