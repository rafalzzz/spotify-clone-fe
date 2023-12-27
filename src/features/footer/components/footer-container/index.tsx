import dynamic from 'next/dynamic';

import { MusicPlayerContextProvider } from '@/footer/contexts/music-player-context';

import { NowPlayedTrack } from '../now-played-track';
import { PlayerControls } from '../player-controls';
import { SoundProgressBar } from '../sound-progress-bar';

import './FooterContainer.scss';

const FooterContainer = (): JSX.Element => (
  <footer className='footer-container'>
    <NowPlayedTrack />
    <MusicPlayerContextProvider>
      <PlayerControls />
      <SoundProgressBar />
    </MusicPlayerContextProvider>
  </footer>
);

export default dynamic(() => Promise.resolve(FooterContainer), { ssr: false });
