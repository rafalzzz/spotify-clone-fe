import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import { CustomTooltip } from '../';

const CHILD_CONTENT = 'Hover over me';
const MOCKED_TOOLTIP_CHILD = <div>{CHILD_CONTENT}</div>;

const renderCustomTooltip = ({ testId }: { testId?: string } = {}) =>
  render(
    <CustomTooltip title='Test Tooltip' testId={testId}>
      {MOCKED_TOOLTIP_CHILD}
    </CustomTooltip>,
  );

describe('CustomTooltip', () => {
  it('renders component without error', () => {
    const screen = renderCustomTooltip();
    expect(screen).toMatchSnapshot();
  });

  it('renders CustomTooltip component with children', () => {
    const { queryByText } = renderCustomTooltip();
    expect(queryByText(CHILD_CONTENT)).toBeInTheDocument();
  });

  it('renders with correct data-testId attribute when testId prop is provided', () => {
    const MOCKED_TOOLTIP_TEST_ID = 'custom-tooltip-test';
    const { queryByTestId } = renderCustomTooltip({ testId: MOCKED_TOOLTIP_TEST_ID });

    expect(queryByTestId(MOCKED_TOOLTIP_TEST_ID)).toBeInTheDocument();
  });
});
