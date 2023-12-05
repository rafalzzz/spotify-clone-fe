import dynamic from 'next/dynamic';

import { NowPlayedTrack } from '../now-played-track';
import { PlayerControls } from '../player-controls';
import { SoundProgressBar } from '../sound-progress-bar';

import './MusicPlayerContainer.scss';

const FooterContainer = () => (
  <footer className='footer-container'>
    <NowPlayedTrack />
    <PlayerControls />
    <SoundProgressBar />
  </footer>
);

export default dynamic(() => Promise.resolve(FooterContainer), { ssr: false });
