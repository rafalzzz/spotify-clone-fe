import Link from 'next/link';
import { FC, PropsWithChildren, memo } from 'react';

import { TCustomSection } from '@/types/components';

import './CustomSection.scss';

export const CustomSection: FC<PropsWithChildren<TCustomSection>> = memo(
  ({ title, redirectionUrl, children }): JSX.Element => (
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
  ),
);
