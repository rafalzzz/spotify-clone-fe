'use client';

import React from 'react';

import { NavButtons } from '../nav-buttons';
import { Redirects } from '../redirects';

import './Navbar.scss';

export const Navbar = () => (
  <nav className='navbar'>
    <NavButtons />
    <Redirects />
  </nav>
);
