import React from 'react';

import './CustomIconButton.scss';

type CustomIconButtonProps = {
  children: JSX.Element;
  onClick?: () => void;
  isActive?: boolean;
};

export const CustomIconButton = ({ children, onClick, isActive = true }: CustomIconButtonProps) => (
  <button
    className={`custom-icon-button${isActive ? ' custom-icon-button--active' : ''}`}
    role='button'
    onClick={onClick}
  >
    {children}
  </button>
);
