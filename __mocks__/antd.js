import React from 'react';

const antd = jest.requireActual('antd');

const Tooltip = ({ children, title, ...props }) => (
  <div {...props}>
    {children}
    <span>{title}</span>
  </div>
);

module.exports = {
  ...antd,
  Tooltip,
};
