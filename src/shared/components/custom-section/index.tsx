'use client';
import Link from 'next/link';

import { CustomSectionItem } from '../custom-section-item';

import './CustomSection.scss';

type CustomSectionProps = {
  title: string;
  redirectionUrl: string;
};

export const CustomSection = ({ title, redirectionUrl }: CustomSectionProps) => (
  <section className='custom-section'>
    <div className='custom-section__header'>
      <header>
        <Link className='custom-section__header__title' href={redirectionUrl}>
          <h2>{title}</h2>
        </Link>
      </header>
      <Link className='custom-section__header__redirection' href={redirectionUrl}>
        Show all
      </Link>
    </div>
    <ul className='custom-section__items'>
      <li>
        <CustomSectionItem />
      </li>
    </ul>
  </section>
);
