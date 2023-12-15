import dynamic from 'next/dynamic';
import { FC, Suspense } from 'react';

import { ArtistsSection } from '@/landing-page/components/artists-section';
import { LoveAlbumsSection } from '@/landing-page/components/love-albums-section';
import { LoveSongsSection } from '@/landing-page/components/love-songs-section';
import { TMainContent } from '@/landing-page/types/types';

import {
  CustomArtistItemLoader,
  CustomContentWrapper,
  CustomSectionItemLoader,
  CustomSectionLoader,
} from '@/shared/server-components';

const MainContent: FC<TMainContent> = ({ songs, albums, artists }): JSX.Element => (
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
