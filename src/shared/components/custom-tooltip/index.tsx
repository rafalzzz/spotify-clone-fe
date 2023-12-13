import Tooltip, { TooltipPlacement } from 'antd/lib/tooltip';
import { FC, PropsWithChildren } from 'react';

type TCustomTooltip = {
  title: string;
  mouseEnterDelay?: number;
  placement?: TooltipPlacement;
  testId?: string;
};

export const CustomTooltip: FC<PropsWithChildren<TCustomTooltip>> = ({
  children,
  title,
  mouseEnterDelay = 0.5,
  placement = 'right',
  testId = '',
}) => (
  <Tooltip
    mouseEnterDelay={mouseEnterDelay}
    placement={placement}
    title={title}
    data-testid={testId}
  >
    {children}
  </Tooltip>
);
