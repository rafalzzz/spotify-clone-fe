import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TooltipPlacement } from 'antd/lib/tooltip';
import React from 'react';

import { CustomTooltip } from '../';

const TOOLTIP_TITLE = 'Test Tooltip';
const TOOLTIP_TEST_ID = 'custom-tooltip';
const CHILD_CONTENT = 'Hover over me';
const MOCKED_TOOLTIP_CHILD = <div>{CHILD_CONTENT}</div>;

type RenderCustomTooltipProps = {
  testId?: string;
  mouseEnterDelay?: number;
  placement?: TooltipPlacement;
};

const renderCustomTooltip = ({
  testId = '',
  mouseEnterDelay,
  placement,
}: RenderCustomTooltipProps = {}) =>
  render(
    <CustomTooltip
      title={TOOLTIP_TITLE}
      testId={testId}
      mouseEnterDelay={mouseEnterDelay}
      placement={placement}
    >
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

  it('renders with correct data-testid attribute when testId prop is provided', () => {
    const { queryByTestId } = renderCustomTooltip({ testId: TOOLTIP_TEST_ID });

    expect(queryByTestId(TOOLTIP_TEST_ID)).toBeInTheDocument();
  });

  it('uses default mouseEnterDelay and placement if not provided', () => {
    const { queryByTestId } = renderCustomTooltip({ testId: TOOLTIP_TEST_ID });

    const tooltip = queryByTestId(TOOLTIP_TEST_ID);

    expect(tooltip).toHaveAttribute('data-mouseenterdelay', '0.5');
    expect(tooltip).toHaveAttribute('data-placement', 'right');
  });

  it('shows the tooltip content on mouse enter', () => {
    const { queryByText, queryByTestId } = renderCustomTooltip({ testId: TOOLTIP_TEST_ID });

    const childElement = queryByTestId(TOOLTIP_TEST_ID);
    fireEvent.mouseOver(childElement as HTMLElement);

    expect(queryByText(TOOLTIP_TITLE)).toBeInTheDocument();
  });
});
