import { Suspense } from 'react';

import { ArtistsSection, LoveAlbumsSection, LoveSongsSection } from '@/landing-page/components';
import { useLandingPage } from '@/landing-page/hooks/use-landing-page';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const LandingPage = async () => {
  const { songs, albums, artists } = await useLandingPage();

  return (
    <CustomContentWrapper>
      <h1>Welcome</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LoveSongsSection songs={songs} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LoveAlbumsSection albums={albums} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ArtistsSection artists={artists} />
      </Suspense>
    </CustomContentWrapper>
  );
};

export default LandingPage;
