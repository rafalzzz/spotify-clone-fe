import { render } from '@testing-library/react';
import React from 'react';

import { CustomSubheader } from '..';

import { commonButtonProps } from '@/test-utils/common-mocks/common-button-props';

import '@testing-library/jest-dom';

const MOCKED_HEADER_TITLE = 'Test';

const renderCustomSubheader = () => {
  const props = {
    title: MOCKED_HEADER_TITLE,
  };

  return render(<CustomSubheader {...props} />);
};

describe('CustomSubheader', () => {
  it('render component without error', () => {
    const screen = renderCustomSubheader();
    expect(screen).toMatchSnapshot();
  });

  it('renders the correct title', () => {
    const { queryByText } = renderCustomSubheader();
    const header = queryByText(MOCKED_HEADER_TITLE);
    expect(header).toBeInTheDocument();
  });
});
