'use client';
import { useCalculateSectionItemsAmount } from '@/hooks/use-calculate-section-items-amount';

import { MusicTrack } from '@/types/music-track';

import { CustomSection, CustomSectionItem, MusicTrackInformations } from '@/shared/components';

export const LatestSongsSection = ({ songs }: { songs: MusicTrack[] }) => {
  const { elementRef, sectionItemsCount } = useCalculateSectionItemsAmount();

  return (
    <CustomSection title='Love songs' redirectionUrl='/love-songs'>
      {
        <ul className='custom-section__items' ref={elementRef}>
          {songs.map(({ trackId, artworkUrl100, trackName, artistName }, index) =>
            index < sectionItemsCount ? (
              <li key={trackId}>
                <CustomSectionItem
                  imageUrl={artworkUrl100}
                  onClick={() => {
                    // TODO - add play song action
                  }}
                >
                  <MusicTrackInformations trackName={trackName} artistName={artistName} />
                </CustomSectionItem>
              </li>
            ) : null,
          )}
        </ul>
      }
    </CustomSection>
  );
};
