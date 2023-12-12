import { ReactNode } from 'react';
import './CustomMainContentWrapper.scss';

type TCustomMainContentWrapper = {
  children: ReactNode;
  className?: string;
};

const BASIC_CLASS_NAME = 'custom-main-content-wrapper';

export const CustomMainContentWrapper = ({ className, children }: TCustomMainContentWrapper) => (
  <main
    className={className ? `${BASIC_CLASS_NAME} ${className}` : BASIC_CLASS_NAME}
    data-testid='custom-main-content-wrapper'
  >
    {children}
  </main>
);
