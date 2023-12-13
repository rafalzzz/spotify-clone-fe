'use client';

import { useState, useRef, useEffect } from 'react';

import { TUseIsTextOverflowing, TUseIsTextOverflowingProps } from '@/footer/types';

export const useIsTextOverflowing = ({
  currentSong,
}: TUseIsTextOverflowing): TUseIsTextOverflowingProps => {
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const titleRect = ref.current.getBoundingClientRect();
      const parentNode = ref.current.parentNode as HTMLDivElement;
      const containerRect = parentNode.getBoundingClientRect();

      const isOverflow = titleRect.width > containerRect.width;
      setIsTextOverflowing(isOverflow);
    }
  }, [currentSong]);

  return { ref, isTextOverflowing };
};
