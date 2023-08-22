import { render } from '@testing-library/react';
import React from 'react';

import { CustomHeader } from '..';

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
    const { queryByText } = renderCustomHeader();
    const header = queryByText(MOCKED_HEADER_TITLE);
    expect(header).toBeInTheDocument();
  });
});
