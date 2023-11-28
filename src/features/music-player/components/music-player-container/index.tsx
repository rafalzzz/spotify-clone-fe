import dynamic from 'next/dynamic';

import { NowPlayedTrack } from '../now-played-track';

import './MusicPlayerContainer.scss';

const MusicPlayerContainer = () => (
  <footer className='music-player-container'>
    <NowPlayedTrack />
  </footer>
);

export default dynamic(() => Promise.resolve(MusicPlayerContainer), { ssr: false });
