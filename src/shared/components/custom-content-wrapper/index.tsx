'use client';
import { FC, PropsWithChildren } from 'react';

import { useCalculateSectionItemsAmount } from '@/hooks/use-calculate-section-items-amount';

import './CustomContentWrapper.scss';

export const CustomContentWrapper: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const ref = useCalculateSectionItemsAmount();

  return (
    <main ref={ref} className='custom-content-wrapper'>
      {children}
    </main>
  );
};
