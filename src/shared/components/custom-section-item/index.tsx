import { CaretRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

import './CustomSectionItem.scss';

type CustomSectionItemProps = {
  imageUrl: string;
  children: JSX.Element;
  onClick: () => void;
};

export const CustomSectionItem = ({ imageUrl, children, onClick }: CustomSectionItemProps) => (
  <div className='custom-section-item'>
    <div className='custom-section-item__image'>
      <Image
        src={imageUrl}
        alt='image'
        width={100}
        height={100}
        style={{ height: '100%', width: '100%' }}
      />
      <button className='custom-section-item__play-button' onClick={onClick}>
        <CaretRightOutlined />
      </button>
    </div>
    {children}
  </div>
);
