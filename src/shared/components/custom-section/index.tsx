import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import './CustomSection.scss';

type TCustomSection = {
  title: string;
  redirectionUrl: string;
};

export const CustomSection: FC<PropsWithChildren<TCustomSection>> = ({
  title,
  redirectionUrl,
  children,
}) => (
  <section className='custom-section'>
    <div className='custom-section__header'>
      <header>
        <Link
          className='custom-section__header__title'
          href={redirectionUrl}
          data-testid='custom-section-header'
        >
          <h2>{title}</h2>
        </Link>
      </header>
      <Link
        className='custom-section__header__redirection'
        href={redirectionUrl}
        data-testid='custom-section-show-all-items'
      >
        Show all
      </Link>
    </div>
    {children}
  </section>
);
