import { render } from '@testing-library/react';
import React from 'react';

import { CustomMainContentWrapper } from '..';

import '@testing-library/jest-dom';

const TEST_ID = 'custom-main-content-wrapper';
const MOCKED_CLASS_NAME = 'mocked-class-name';

const renderCustomMainContentWrapper = () => {
  const props = {
    className: MOCKED_CLASS_NAME,
  };

  return render(
    <CustomMainContentWrapper {...props}>
      <div>Test</div>
    </CustomMainContentWrapper>,
  );
};

describe('CustomMainContentWrapper', () => {
  it('render component without error', () => {
    const screen = renderCustomMainContentWrapper();
    expect(screen).toMatchSnapshot();
  });

  it('should have the correct className', () => {
    const { queryByTestId } = renderCustomMainContentWrapper();
    const wrapper = queryByTestId(TEST_ID);
    expect(wrapper).toHaveClass(MOCKED_CLASS_NAME);
  });
});
