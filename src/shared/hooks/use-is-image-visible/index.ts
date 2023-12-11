import { useState, useEffect, useCallback, RefObject } from 'react';

type TUseIsImageVisible = {
  ref: RefObject<HTMLDivElement>;
};

export const useIsImageVisible = ({ ref }: TUseIsImageVisible) => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleImageHeight = useCallback(() => {
    const imageContainer = ref.current;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      setIsImageVisible(!!entry.contentRect.height);
    });

    if (imageContainer) {
      resizeObserver.observe(imageContainer);
    }

    return () => {
      if (imageContainer) {
        resizeObserver.unobserve(imageContainer);
      }
    };
  }, [ref]);

  useEffect(handleImageHeight, [handleImageHeight]);

  return isImageVisible;
};
