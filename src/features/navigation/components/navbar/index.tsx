'use client';
import dynamic from 'next/dynamic';

import { usePreventContextMenu } from '@/navigation/hooks/use-prevent-context-menu';

import { NavButtons } from '../nav-buttons';
import { Redirects } from '../redirects';

import './Navbar.scss';

const Navbar = (): JSX.Element => {
  usePreventContextMenu();

  return (
    <nav className='navbar'>
      <NavButtons />
      <Redirects />
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
