import { render } from '@testing-library/react';
import React from 'react';

import { CustomPageWrapper } from '..';

import '@testing-library/jest-dom';

const renderCustomPageWrapper = () =>
  render(
    <CustomPageWrapper>
      <div>Test</div>
    </CustomPageWrapper>,
  );

describe('CustomPageWrapper', () => {
  it('render component without error', () => {
    const screen = renderCustomPageWrapper();
    expect(screen).toMatchSnapshot();
  });
});
