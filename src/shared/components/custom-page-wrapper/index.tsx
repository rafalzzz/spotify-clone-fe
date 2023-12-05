import { ReactNode } from 'react';
import './CustomPageWrapper.scss';

type CustomPageWrapperProps = {
  children: ReactNode;
};

export const CustomPageWrapper = ({ children }: CustomPageWrapperProps) => (
  <div className='custom-page-wrapper' data-testid='custom-page-wrapper'>
    {children}
  </div>
);
