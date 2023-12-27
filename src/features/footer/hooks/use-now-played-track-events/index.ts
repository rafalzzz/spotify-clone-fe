import { useState } from 'react';

import { TUseMusicTrackTitleTooltipProps } from '@/footer/types';

export const useMusicTrackTitleTooltips = (): TUseMusicTrackTitleTooltipProps => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const onOpenChange = (open: boolean) => {
    setIsMenuOpen(open);
  };

  const onMouseEnter = () => {
    setIsMouseOver(true);
  };

  const onMouseLeave = () => {
    setIsMouseOver(false);
  };

  return { isMenuOpen, isMouseOver, onOpenChange, onMouseEnter, onMouseLeave };
};
