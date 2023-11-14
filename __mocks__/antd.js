import React from 'react';

const antd = jest.requireActual('antd');

const Tooltip = ({ children, title, ...props }) => {
  const { mouseEnterDelay, ...rest } = props;

  return (
    <div {...rest}>
      {children}
      <span>{title}</span>
    </div>
  );
};

// Export this mocked Tooltip with the rest of the components
export { Tooltip };

module.exports = {
  ...antd,
  Tooltip,
};
