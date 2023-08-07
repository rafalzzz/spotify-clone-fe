import { render } from '@testing-library/react';
import React from 'react';

import { CustomHeader } from '..';

import { commonButtonProps } from '@/test-utils/common-mocks/common-button-props';

import '@testing-library/jest-dom';

const MOCKED_HEADER_TITLE = 'Test';

const renderCustomHeader = () => {
  const props = {
    title: MOCKED_HEADER_TITLE,
  };

  return render(<CustomHeader {...props} />);
};

describe('CustomHeader', () => {
  it('render component without error', () => {
    const screen = renderCustomHeader();
    expect(screen).toMatchSnapshot();
  });

  it('renders the correct title', () => {
    const { getByText } = renderCustomHeader();
    const header = getByText(MOCKED_HEADER_TITLE);
    expect(header).toBeInTheDocument();
  });
});
