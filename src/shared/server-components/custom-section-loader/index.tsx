'use server';

import { TCustomSectionLoader } from '@/types/components';

import './CustomSectionLoader.scss';

const ITEMS_IDS = Array.from({ length: 15 }, (_, i) => i + 1);

export const CustomSectionLoader = ({ SectionItemLoader }: TCustomSectionLoader): JSX.Element => (
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
