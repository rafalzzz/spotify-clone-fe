import React from 'react';

const Tooltip = ({ children, title, mouseEnterDelay, placement, ...props }) => {
  return (
    <div {...props} data-mouseenterdelay={mouseEnterDelay} data-placement={placement}>
      {children}
      <span>{title}</span>
    </div>
  );
};

export { Tooltip };

module.exports = Tooltip;
