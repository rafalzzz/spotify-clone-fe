import { Suspense } from 'react';

import { LatestSongsSection } from '@/landing-page/components/latest-songs-section';
import { useLandingPage } from '@/landing-page/hooks/use-landing-page';

import { BasicLayout } from '@/components/basic-layout';
import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const LandingPage = async () => {
  const { songs, albums } = await useLandingPage();

  return (
    <BasicLayout>
      <CustomContentWrapper>
        <h1>Welcome</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <LatestSongsSection songs={songs} />
        </Suspense>
      </CustomContentWrapper>
    </BasicLayout>
  );
};

export default LandingPage;
