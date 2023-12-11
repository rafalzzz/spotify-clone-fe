import { ReactNode } from 'react';

import './CustomContentWrapper.scss';

type TCustomContentWrapper = {
  children: ReactNode;
};

export const CustomContentWrapper = ({ children }: TCustomContentWrapper) => (
  <main className='custom-content-wrapper'>{children}</main>
);
