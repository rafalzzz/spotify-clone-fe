import { render } from '@testing-library/react';
import React from 'react';

import { MusicPlayerContextProvider } from '@/footer/contexts/music-player-context';

import { MusicProgressBar } from '../';

describe('MusicProgressBar', () => {
  it('renders without errors', () => {
    const screen = render(
      <MusicPlayerContextProvider>
        <MusicProgressBar />
      </MusicPlayerContextProvider>,
    );

    expect(screen).toMatchSnapshot();
  });
});
