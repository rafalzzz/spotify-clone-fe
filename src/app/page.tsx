import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { useLandingPage } from '@/landing-page/hooks/use-landing-page';

import {
  CustomArtistItemLoader,
  CustomContentWrapper,
  CustomSectionItemLoader,
  CustomSectionLoader,
} from '@/shared/server-components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const ArtistsSection = dynamic(() => import('@/landing-page/components/artists-section'));
const LoveAlbumsSection = dynamic(() => import('@/landing-page/components/love-albums-section'));
const LoveSongsSection = dynamic(() => import('@/landing-page/components/love-songs-section'));

const LandingPage = async () => {
  const { songs, albums, artists } = await useLandingPage();

  return (
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
};

export default LandingPage;
