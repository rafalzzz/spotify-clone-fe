import { render } from '@testing-library/react';
import React from 'react';

import { CustomPageWrapper } from '..';

import '@testing-library/jest-dom';

describe('CustomPageWrapper', () => {
  it('render component without error', () => {
    const screen = render(
      <CustomPageWrapper>
        <div>Test</div>
      </CustomPageWrapper>,
    );

    expect(screen).toMatchSnapshot();
  });
});
