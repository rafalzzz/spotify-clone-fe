import dynamic from 'next/dynamic';

import { NowPlayedTrack } from '../now-played-track';
import { PlayerControls } from '../player-controls';

import './MusicPlayerContainer.scss';

const MusicPlayerContainer = () => (
  <footer className='music-player-container'>
    <NowPlayedTrack />
    <PlayerControls />
  </footer>
);

export default dynamic(() => Promise.resolve(MusicPlayerContainer), { ssr: false });
