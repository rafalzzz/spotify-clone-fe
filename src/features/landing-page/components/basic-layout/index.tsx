import { ReactNode } from 'react';

import Sidebar from '@/sidebar/components/sidebar';

import MusicPlayerContainer from '@/music-player/components/music-player-container';

import Navbar from '@/navigation/components/navbar';

import './BasicLayout.scss';

type BasicLayoutProps = {
  children: ReactNode;
};

export const BasicLayout = ({ children }: BasicLayoutProps) => (
  <div className='basic-layout'>
    <Sidebar />
    <div className='basic-layout__content'>
      <Navbar />
      {children}
    </div>
    <MusicPlayerContainer />
  </div>
);
