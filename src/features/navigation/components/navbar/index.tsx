'use client';

import dynamic from 'next/dynamic';

import { NavButtons } from '../nav-buttons';
import { Redirects } from '../redirects';

import './Navbar.scss';

const Navbar = () => (
  <nav className='navbar'>
    <NavButtons />
    <Redirects />
  </nav>
);

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
