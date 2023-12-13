'use client';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

import { useHistory } from '@/navigation/hooks/use-history';

import { CustomButton } from '@/components/custom-button';

import './NavButtons.scss';

const INITIAL_STATE = {
  allPaths: [],
  currentPathIndex: -1,
};

export const NavButtons = (): JSX.Element => {
  const { isUndoButtonDisabled, isRedoButtonDisabled, undoHistory, redoHistory } = useHistory({
    initialState: INITIAL_STATE,
  });

  const NAV_BUTTONS = useMemo(
    () => [
      {
        key: 1,
        text: <LeftOutlined />,
        disabled: isUndoButtonDisabled,
        testId: 'undo-history',
        onClick: undoHistory,
      },
      {
        key: 2,
        text: <RightOutlined />,
        testId: 'redo-history',
        disabled: isRedoButtonDisabled,
        onClick: redoHistory,
      },
    ],
    [isUndoButtonDisabled, isRedoButtonDisabled, undoHistory, redoHistory],
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
