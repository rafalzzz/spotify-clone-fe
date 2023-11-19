'use server';

import './CustomSectionLoader.scss';

const ITEMS_IDS = Array.from({ length: 15 }, (_, i) => i + 1);

type CustomSectionLoaderProps = {
  SectionItemLoader: () => JSX.Element;
};

export const CustomSectionLoader = ({ SectionItemLoader }: CustomSectionLoaderProps) => (
  <section className='custom-section-loader'>
    <div className='custom-section-loader__header'>
      <div className='custom-section-loader__header__title' />
      <div className='custom-section-loader__header__redirection' />
    </div>
    {
      <ul className='custom-section-loader__items'>
        {ITEMS_IDS.map((id) => (
          <li key={id}>
            <SectionItemLoader />
          </li>
        ))}
      </ul>
    }
  </section>
);
