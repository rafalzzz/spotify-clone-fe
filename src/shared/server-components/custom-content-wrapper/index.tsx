import { FC, PropsWithChildren } from 'react';

import './CustomContentWrapper.scss';

export const CustomContentWrapper: FC<PropsWithChildren> = ({ children }): JSX.Element => (
  <main className='custom-content-wrapper'>{children}</main>
);
