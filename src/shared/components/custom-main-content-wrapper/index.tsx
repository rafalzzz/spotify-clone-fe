import { ReactNode } from 'react';
import './CustomMainContentWrapper.scss';

type CustomPageWrapperProps = {
  className?: string;
  children: ReactNode;
};

const BASIC_CLASS_NAME = 'custom-main-content-wrapper';

export const CustomMainContentWrapper = ({ className, children }: CustomPageWrapperProps) => (
  <main
    className={className ? `${BASIC_CLASS_NAME} ${className}` : BASIC_CLASS_NAME}
    data-testid='custom-main-content-wrapper'
  >
    {children}
  </main>
);
