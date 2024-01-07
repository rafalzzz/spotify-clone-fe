'use client';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

import { useHistory } from '@/navigation/hooks/use-history';

import { CustomButton } from '@/components/custom-button';

import './NavButtons.scss';

export const NavButtons = (): JSX.Element => {
  const { undoHistory, redoHistory } = useHistory();

  const NAV_BUTTONS = useMemo(
    () => [
      {
        key: 1,
        text: <LeftOutlined />,
        disabled: false,
        testId: 'undo-history',
        onClick: undoHistory,
      },
      {
        key: 2,
        text: <RightOutlined />,
        testId: 'redo-history',
        disabled: false,
        onClick: redoHistory,
      },
    ],
    [undoHistory, redoHistory],
  );

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
