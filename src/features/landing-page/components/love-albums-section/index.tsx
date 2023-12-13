'use client';
import { TLoveAlbumsSection } from '@/landing-page/types/types';

import { useMusicPlayerStore } from '@/store/music-player';

import { EAlbumKeys } from '@/types/album';

import { CustomSection, CustomSectionItem, AlbumInformation } from '@/shared/components';

export const LoveAlbumsSection = ({ albums }: TLoveAlbumsSection): JSX.Element => {
  const { isPlaying } = useMusicPlayerStore();

  return (
    <CustomSection title='Love albums' redirectionUrl='/love-albums'>
      {
        <ul className='custom-section__items'>
          {albums.map((album) => (
            <li key={album[EAlbumKeys.COLLECTION_ID]}>
              <CustomSectionItem
                collectionName={album[EAlbumKeys.COLLECTION_NAME]}
                imageUrl={album[EAlbumKeys.ARTWORK_URL_60]}
                isActive={false}
                isPlaying={isPlaying}
                onClick={() => {
                  // TODO - add play song action
                }}
              >
                <AlbumInformation
                  collectionName={album[EAlbumKeys.COLLECTION_NAME]}
                  releaseDate={album[EAlbumKeys.RELEASE_DATE]}
                  artistName={album[EAlbumKeys.ARTIST_NAME]}
                />
              </CustomSectionItem>
            </li>
          ))}
        </ul>
      }
    </CustomSection>
  );
};
