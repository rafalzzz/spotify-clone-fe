import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';

import { CustomButton } from '@/components/custom-button';

import './NavButtons.scss';

// TODO - handle onClick once the landingPage is more developed

export const NavButtons = () => {
  const NAV_BUTTONS = [
    {
      key: 1,
      text: <LeftOutlined />,
      onClick: () => {
        console.log('undo');
      },
    },
    {
      key: 2,
      text: <RightOutlined />,
      onClick: () => {
        console.log('redo');
      },
    },
  ];

  return (
    <ul className='nav-buttons'>
      {NAV_BUTTONS.map(({ key, ...restProps }) => (
        <li key={key}>
          <CustomButton
            className='nav-buttons__item'
            shape='circle'
            htmlType='button'
            size='middle'
            {...restProps}
          />
        </li>
      ))}
    </ul>
  );
};
