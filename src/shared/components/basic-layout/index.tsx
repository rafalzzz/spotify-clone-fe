import { ReactNode } from 'react';

import { Sidebar } from '@/sidebar/components/sidebar';

import { Navbar } from '@/navigation/components/navbar';

import { CustomPageWrapper } from '@/components/custom-page-wrapper';

import './BasicLayout.scss';

type BasicLayoutProps = {
  children: ReactNode;
};

const BasicLayout = ({ children }: BasicLayoutProps) => (
  <CustomPageWrapper className='justify-start'>
    <Sidebar />
    <div className='basic-layout__content'>
      <Navbar />
      {children}
    </div>
  </CustomPageWrapper>
);

export default BasicLayout;
