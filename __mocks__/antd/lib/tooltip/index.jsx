import React from 'react';

const Tooltip = ({ children, title, open = true, mouseEnterDelay, placement, ...props }) => {
  if (!open) return children;

  return (
    <div {...props} data-mouseenterdelay={mouseEnterDelay} data-placement={placement}>
      {children}
      <span>{title}</span>
    </div>
  );
};

export default Tooltip;
