'use client';
import { useRef, useCallback, useEffect, MutableRefObject } from 'react';

import { useSectionStore } from '@/store/section';

import { getItemsAmount } from '@/utils/get-items-amount';

const RESIZE_TIMEOUT = 1000;

export const useCalculateSectionItemsAmount = (): MutableRefObject<HTMLUListElement | null> => {
  const enableResizing = useSectionStore(({ enableResizing }) => enableResizing);
  const disableResizing = useSectionStore(({ disableResizing }) => disableResizing);
  const setItemsAmount = useSectionStore(({ setItemsAmount }) => setItemsAmount);

  const elementRef = useRef<HTMLUListElement | null>(null);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);
  const prevItemsAmount = useRef<number | null>(null);

  const onResize = useCallback(() => {
    enableResizing();
  }, [enableResizing]);

  const onResizeEnd = useCallback(
    (itemsAmount: number) => {
      setItemsAmount(itemsAmount);
      disableResizing();
    },
    [setItemsAmount, disableResizing],
  );

  const handleObserver = useCallback(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const itemsAmount = getItemsAmount(entries);

      if (prevItemsAmount.current === itemsAmount) {
        return;
      }

      prevItemsAmount.current = itemsAmount;

      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }

      onResize();

      resizeTimeout.current = setTimeout(() => {
        onResizeEnd(itemsAmount);
      }, RESIZE_TIMEOUT);
    });

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [onResize, onResizeEnd]);

  useEffect(handleObserver, [handleObserver]);

  return elementRef;
};
