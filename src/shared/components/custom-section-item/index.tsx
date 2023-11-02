import { CaretRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

import './CustomSection.scss';

export const CustomSectionItem = () => (
  <div className='custom-section-item'>
    <div className='custom-section-item__image'>
      <Image
        src='https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6b/b4/f3/6bb4f335-7700-3877-e65e-f37a850f5ec2/mzi.ouovshmg.jpg/100x100bb.jpg'
        alt='image'
        width={100}
        height={100}
        style={{ height: '100%', width: '100%' }}
      />
      <button
        className='custom-section-item__play-button'
        onClick={() => {
          console.log('test');
        }}
      >
        <CaretRightOutlined />
      </button>
    </div>
    <div className='custom-section-item__informations'>
      <h4 className='custom-section-item__text'>Zawsze chciałem</h4>
      <h5 className='custom-section-item__text artist'>Gibbs</h5>
    </div>
  </div>
);
