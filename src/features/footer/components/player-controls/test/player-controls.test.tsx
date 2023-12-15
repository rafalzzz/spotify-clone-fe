import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MusicPlayerContextProvider } from '@/footer/contexts/music-player-context';

import { PlayerControls } from '../';

describe('PlayerControls', () => {
  it('render component without error', () => {
    const screen = render(
      <MusicPlayerContextProvider>
        <PlayerControls />
      </MusicPlayerContextProvider>,
    );
    expect(screen).toMatchSnapshot();
  });
});
