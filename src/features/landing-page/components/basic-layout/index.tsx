import { FC, PropsWithChildren } from 'react';

import Sidebar from '@/sidebar/components/sidebar';

import FooterContainer from '@/footer/components/footer-container';

import Navbar from '@/navigation/components/navbar';

import './BasicLayout.scss';

export const BasicLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => (
  <div className='basic-layout'>
    <Sidebar />
    <div className='basic-layout__content'>
      <Navbar />
      {children}
    </div>
    <FooterContainer />
  </div>
);
