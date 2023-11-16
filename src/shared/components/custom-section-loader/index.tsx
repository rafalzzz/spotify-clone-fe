'use client';

import { CustomSectionItemLoader } from '@/shared/components';

import './CustomSectionLoader.scss';

const ITEMS_IDS = Array.from({ length: 15 }, (_, i) => i + 1);

export const CustomSectionLoader = () => (
  <section className='custom-section-loader'>
    <div className='custom-section-loader__header'>
      <div className='custom-section-loader__header__title' />
      <div className='custom-section-loader__header__redirection' />
    </div>
    {
      <ul className='custom-section-loader__items'>
        {ITEMS_IDS.map((id) => (
          <li key={id}>
            <CustomSectionItemLoader />
          </li>
        ))}
      </ul>
    }
  </section>
);
