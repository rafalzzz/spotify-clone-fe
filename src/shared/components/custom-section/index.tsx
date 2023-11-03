import Link from 'next/link';

import './CustomSection.scss';

type CustomSectionProps = {
  title: string;
  redirectionUrl: string;
  children: JSX.Element;
};

export const CustomSection = ({ title, redirectionUrl, children }: CustomSectionProps) => (
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
    {children}
  </section>
);
