'use client';
import { useCalculateSectionItemsAmount } from '@/hooks/use-calculate-section-items-amount';

import { Album } from '@/types/album';

import { CustomSection, CustomSectionItem, AlbumInformations } from '@/shared/components';

export const LoveAlbumsSection = ({ albums }: { albums: Album[] }) => {
  const { elementRef, sectionItemsCount } = useCalculateSectionItemsAmount();

  return (
    <CustomSection title='Love albums' redirectionUrl='/love-albums'>
      {
        <ul className='custom-section__items' ref={elementRef}>
          {albums.map(
            ({ collectionId, artworkUrl100, collectionName, releaseDate, artistName }, index) =>
              index < sectionItemsCount ? (
                <li key={collectionId}>
                  <CustomSectionItem
                    imageUrl={artworkUrl100}
                    onClick={() => {
                      // TODO - add play song action
                    }}
                  >
                    <AlbumInformations
                      collectionName={collectionName}
                      releaseDate={releaseDate}
                      artistName={artistName}
                    />
                  </CustomSectionItem>
                </li>
              ) : null,
          )}
        </ul>
      }
    </CustomSection>
  );
};
