import dynamic from 'next/dynamic';

import './MusicPlayerContainer.scss';

const MusicPlayerContainer = () => <footer className='music-player-container'></footer>;

export default dynamic(() => Promise.resolve(MusicPlayerContainer), { ssr: false });
