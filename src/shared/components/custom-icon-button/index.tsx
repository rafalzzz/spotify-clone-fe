import React from 'react';

import './CustomIconButton.scss';

type TCustomIconButton = {
  children: JSX.Element;
  onClick?: () => void;
  isActive?: boolean;
};

export const CustomIconButton = ({ children, onClick, isActive = true }: TCustomIconButton) => (
  <button
    className={`custom-icon-button${isActive ? ' custom-icon-button--active' : ''}`}
    role='button'
    onClick={onClick}
  >
    {children}
  </button>
);
