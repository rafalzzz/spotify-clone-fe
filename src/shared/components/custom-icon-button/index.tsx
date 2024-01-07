import React, { FC, PropsWithChildren } from 'react';

import { TCustomIconButton } from '@/types/components';

import './CustomIconButton.scss';

export const CustomIconButton: FC<PropsWithChildren<TCustomIconButton>> = ({
  children,
  onClick,
  isActive = false,
  testId = '',
  ariaLabel = '',
}): JSX.Element => (
  <button
    className={`custom-icon-button${isActive ? ' custom-icon-button--active' : ''}`}
    role='button'
    onClick={onClick}
    data-testid={testId}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);
