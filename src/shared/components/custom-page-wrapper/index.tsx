import { FC, PropsWithChildren } from 'react';

import './CustomPageWrapper.scss';

export const CustomPageWrapper: FC<PropsWithChildren> = ({ children }): JSX.Element => (
  <div className='custom-page-wrapper' data-testid='custom-page-wrapper'>
    {children}
  </div>
);
