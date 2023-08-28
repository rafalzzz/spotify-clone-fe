import { ReactNode } from 'react';
import './CustomPageWrapper.scss';

type CustomPageWrapperProps = {
  className?: string;
  children: ReactNode;
};

const BASIC_CLASS_NAME = 'custom-page-wrapper';

export const CustomPageWrapper = ({ className, children }: CustomPageWrapperProps) => (
  <div
    className={className ? `${BASIC_CLASS_NAME} ${className}` : BASIC_CLASS_NAME}
    data-testid='custom-page-wrapper'
  >
    {children}
  </div>
);
