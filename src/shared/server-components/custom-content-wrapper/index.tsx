import { ReactNode } from 'react';

import './CustomContentWrapper.scss';

type CustomContentWrapper = {
  children: ReactNode;
};

export const CustomContentWrapper = ({ children }: CustomContentWrapper) => (
  <main className='custom-content-wrapper'>{children}</main>
);
