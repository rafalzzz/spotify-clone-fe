import '@/styles/globals.scss';
import '@/styles/properties.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
