import { ReactNode } from 'react';

import Sidebar from '@/sidebar/components/sidebar';

import FooterContainer from '@/footer/components/footer-container';

import Navbar from '@/navigation/components/navbar';

import { TBasicLayout } from '@/landing-page/types/types';

import './BasicLayout.scss';

export const BasicLayout = ({ children }: TBasicLayout) => (
  <div className='basic-layout'>
    <Sidebar />
    <div className='basic-layout__content'>
      <Navbar />
      {children}
    </div>
    <FooterContainer />
  </div>
);
