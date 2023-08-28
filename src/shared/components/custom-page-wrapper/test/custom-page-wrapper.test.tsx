import { render } from '@testing-library/react';
import React from 'react';

import { CustomPageWrapper } from '..';

import '@testing-library/jest-dom';

const TEST_ID = 'custom-page-wrapper';
const MOCKED_CLASS_NAME = 'mocked-class-name';

const renderCustomPageWrapper = () => {
  const props = {
    className: MOCKED_CLASS_NAME,
  };

  return render(
    <CustomPageWrapper {...props}>
      <div>Test</div>
    </CustomPageWrapper>,
  );
};

describe('CustomPageWrapper', () => {
  it('render component without error', () => {
    const screen = renderCustomPageWrapper();
    expect(screen).toMatchSnapshot();
  });

  it('should have the correct className', () => {
    const { queryByTestId } = renderCustomPageWrapper();
    const wrapper = queryByTestId(TEST_ID);
    expect(wrapper).toHaveClass(MOCKED_CLASS_NAME);
  });
});
