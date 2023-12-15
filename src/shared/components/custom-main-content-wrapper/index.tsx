import { FC, PropsWithChildren } from 'react';

import { TCustomMainContentWrapper } from '@/types/components';

import './CustomMainContentWrapper.scss';

const BASIC_CLASS_NAME = 'custom-main-content-wrapper';

export const CustomMainContentWrapper: FC<PropsWithChildren<TCustomMainContentWrapper>> = ({
  className,
  children,
}): JSX.Element => (
  <main
    className={className ? `${BASIC_CLASS_NAME} ${className}` : BASIC_CLASS_NAME}
    data-testid='custom-main-content-wrapper'
  >
    {children}
  </main>
);
