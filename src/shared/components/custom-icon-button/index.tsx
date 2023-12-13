import React, { FC, PropsWithChildren } from 'react';

import './CustomIconButton.scss';

type TCustomIconButton = {
  onClick?: () => void;
  isActive?: boolean;
};

export const CustomIconButton: FC<PropsWithChildren<TCustomIconButton>> = ({
  children,
  onClick,
  isActive = false,
}) => (
  <button
    className={`custom-icon-button${isActive ? ' custom-icon-button--active' : ''}`}
    role='button'
    onClick={onClick}
  >
    {children}
  </button>
);
