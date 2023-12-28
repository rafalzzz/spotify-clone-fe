import { render } from '@testing-library/react';

import { TAlbum } from '@/types/album';

import { mockAlbums } from '@/consts/mocks';

import { LoveAlbumsSection } from '..';

describe('LoveAlbumsSection', () => {
  it('render component without error', () => {
    const screen = render(<LoveAlbumsSection albums={mockAlbums as TAlbum[]} />);
    expect(screen).toMatchSnapshot();
  });
});
