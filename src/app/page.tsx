import { Suspense } from 'react';

import { LoveAlbumsSection } from '@/landing-page/components/love-albums-section';
import { LoveSongsSection } from '@/landing-page/components/love-songs-section';
import { useLandingPage } from '@/landing-page/hooks/use-landing-page';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const LandingPage = async () => {
  const { songs, albums } = await useLandingPage();

  return (
    <CustomContentWrapper>
      <h1>Welcome</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LoveSongsSection songs={songs} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LoveAlbumsSection albums={albums} />
      </Suspense>
    </CustomContentWrapper>
  );
};

export default LandingPage;
