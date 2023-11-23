import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { ArtistsSection } from '@/landing-page/components/artists-section';
import { LoveAlbumsSection } from '@/landing-page/components/love-albums-section';
import { LoveSongsSection } from '@/landing-page/components/love-songs-section';

import { Album } from '@/interfaces/album';
import { Artist } from '@/interfaces/artist';
import { MusicTrack } from '@/interfaces/music-track';

import {
  CustomArtistItemLoader,
  CustomContentWrapper,
  CustomSectionItemLoader,
  CustomSectionLoader,
} from '@/shared/server-components';

const MainContent = ({
  songs,
  albums,
  artists,
}: {
  songs: MusicTrack[];
  albums: Album[];
  artists: Artist[];
}) => (
  <CustomContentWrapper>
    <h1>Welcome</h1>
    <Suspense fallback={<CustomSectionLoader SectionItemLoader={CustomSectionItemLoader} />}>
      <LoveSongsSection songs={songs} />
    </Suspense>
    <Suspense fallback={<CustomSectionLoader SectionItemLoader={CustomSectionItemLoader} />}>
      <LoveAlbumsSection albums={albums} />
    </Suspense>
    <Suspense fallback={<CustomSectionLoader SectionItemLoader={CustomArtistItemLoader} />}>
      <ArtistsSection artists={artists} />
    </Suspense>
  </CustomContentWrapper>
);

export default dynamic(() => Promise.resolve(MainContent), { ssr: false });
