import { ReactNode } from 'react';
import './CustomPageWrapper.scss';

type TCustomPageWrapper = {
  children: ReactNode;
};

export const CustomPageWrapper = ({ children }: TCustomPageWrapper) => (
  <div className='custom-page-wrapper' data-testid='custom-page-wrapper'>
    {children}
  </div>
);
