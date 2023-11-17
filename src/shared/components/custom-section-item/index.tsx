import { CaretRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRef } from 'react';

import { useIsImageVisible } from '@/hooks/use-is-image-visible';

import './CustomSectionItem.scss';

type CustomSectionItemProps = {
  imageUrl: string;
  children: JSX.Element;
  onClick: () => void;
};

export const CustomSectionItem = ({ imageUrl, children, onClick }: CustomSectionItemProps) => {
  const ref = useRef(null);
  const isImageVisible = useIsImageVisible({ ref });

  return (
    <div className='custom-section-item'>
      <div className='custom-section-item__image' ref={ref}>
        <Image
          src={imageUrl}
          alt='image'
          width={100}
          height={100}
          style={{ height: '100%', width: '100%' }}
        />
        {isImageVisible && (
          <button
            className='custom-section-item__play-button'
            onClick={onClick}
            data-testid='custom-section-item-play-button'
          >
            <CaretRightOutlined />
          </button>
        )}
      </div>
      {children}
    </div>
  );
};
