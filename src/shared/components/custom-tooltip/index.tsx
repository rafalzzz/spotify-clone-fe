import Tooltip from 'antd/lib/tooltip';
import { FC, PropsWithChildren } from 'react';

import { TCustomTooltip } from '@/types/components';

export const CustomTooltip: FC<PropsWithChildren<TCustomTooltip>> = ({
  children,
  title,
  open,
  mouseEnterDelay = 0.5,
  placement = 'right',
  testId = '',
}): JSX.Element => (
  <Tooltip
    open={open}
    mouseEnterDelay={mouseEnterDelay}
    placement={placement}
    title={title}
    data-testid={testId}
  >
    {children}
  </Tooltip>
);
