import './CustomSectionItemLoader.scss';

export const CustomSectionItemLoader = () => (
  <div className='custom-section-item-loader'>
    <div className='custom-section-item-loader__image' />
    <div className='custom-section-item-loader__skeleton-text__container'>
      <div className='custom-section-item-loader__skeleton-text__header' />
      <div className='custom-section-item-loader__skeleton-text__subheader' />
    </div>
  </div>
);
