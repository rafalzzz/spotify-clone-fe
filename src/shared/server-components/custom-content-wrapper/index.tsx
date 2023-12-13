import { FC, PropsWithChildren } from 'react';

import './CustomContentWrapper.scss';

export const CustomContentWrapper: FC<PropsWithChildren> = ({ children }) => (
  <main className='custom-content-wrapper'>{children}</main>
);
