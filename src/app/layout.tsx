import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { BasicLayout } from '@/landing-page/components/basic-layout';


import '@/styles/globals.scss';
import '@/styles/properties.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Generated by create next app',
};

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactNode => (
  <html lang='en'>
    <body className={inter.className}>
      <BasicLayout>{children}</BasicLayout>
    </body>
  </html>
);

export default RootLayout;
