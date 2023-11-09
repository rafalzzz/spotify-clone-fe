import { useState, useRef, useCallback, useEffect } from 'react';

const GRID_GAP = 20;
const MIN_ITEM_WIDTH = 150;

export const useCalculateSectionItemsAmount = () => {
  const elementRef = useRef<HTMLUListElement | null>(null);
  const [sectionItemsCount, setSectionItemsCount] = useState(1);

  const handleObserver = useCallback(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;

      const itemsCount = Math.floor((width + GRID_GAP) / (MIN_ITEM_WIDTH + GRID_GAP));
      setSectionItemsCount(itemsCount);
    });

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(handleObserver, [handleObserver]);

  return { elementRef, sectionItemsCount };
};
