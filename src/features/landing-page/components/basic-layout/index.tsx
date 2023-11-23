import { ReactNode } from 'react';

import Sidebar from '@/sidebar/components/sidebar';

import Navbar from '@/navigation/components/navbar';

import { CustomPageWrapper } from '@/components/custom-page-wrapper';

import './BasicLayout.scss';

type BasicLayoutProps = {
  children: ReactNode;
};

export const BasicLayout = ({ children }: BasicLayoutProps) => (
  <CustomPageWrapper className='justify-start'>
    <Sidebar />
    <div className='basic-layout'>
      <Navbar />
      {children}
    </div>
  </CustomPageWrapper>
);
