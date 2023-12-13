import { FC, PropsWithChildren } from 'react';

import './CustomMainContentWrapper.scss';

type TCustomMainContentWrapper = {
  className?: string;
};

const BASIC_CLASS_NAME = 'custom-main-content-wrapper';

export const CustomMainContentWrapper: FC<PropsWithChildren<TCustomMainContentWrapper>> = ({
  className,
  children,
}) => (
  <main
    className={className ? `${BASIC_CLASS_NAME} ${className}` : BASIC_CLASS_NAME}
    data-testid='custom-main-content-wrapper'
  >
    {children}
  </main>
);
