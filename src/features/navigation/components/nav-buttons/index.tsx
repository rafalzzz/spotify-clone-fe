import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';

import { CustomButton } from '@/components/custom-button';

import './NavButtons.scss';

const commonProps = {
  className: 'nav-buttons__item',
  shape: 'circle',
  size: 'middle',
};

export const NavButtons = () => {
  const NAV_BUTTONS = [
    { key: 1, icon: <LeftOutlined /> },
    { key: 2, icon: <RightOutlined /> },
  ];

  return (
    <ul className='nav-buttons'>
      {NAV_BUTTONS.map(({ key, icon }) => (
        <li key={key}>
          <CustomButton
            className='nav-buttons__item'
            shape='circle'
            htmlType='button'
            size='middle'
            text={icon}
          />
        </li>
      ))}
    </ul>
  );
};
