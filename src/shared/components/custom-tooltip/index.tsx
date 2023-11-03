import { Tooltip } from 'antd';
import { TooltipPlacement } from 'antd/es/tooltip';

type CustomTooltipProps = {
  title: string;
  children: JSX.Element;
  mouseEnterDelay?: number;
  placement?: TooltipPlacement;
};

export const CustomTooltip = ({
  title,
  mouseEnterDelay = 0.5,
  placement = 'right',
  children,
}: CustomTooltipProps) => (
  <Tooltip mouseEnterDelay={mouseEnterDelay} placement={placement} title={title}>
    {children}
  </Tooltip>
);
