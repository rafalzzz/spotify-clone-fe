import { Tooltip } from 'antd';
import { TooltipPlacement } from 'antd/es/tooltip';

type CustomTooltipProps = {
  title: string;
  children: JSX.Element;
  mouseEnterDelay?: number;
  placement?: TooltipPlacement;
  testId?: string;
};

export const CustomTooltip = ({
  title,
  mouseEnterDelay = 0.5,
  placement = 'right',
  testId = '',
  children,
}: CustomTooltipProps) => (
  <Tooltip
    mouseEnterDelay={mouseEnterDelay}
    placement={placement}
    title={title}
    data-testid={testId}
  >
    {children}
  </Tooltip>
);
