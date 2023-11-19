import { Suspense } from 'react';

import { ArtistsSection, LoveAlbumsSection, LoveSongsSection } from '@/landing-page/components';
import { useLandingPage } from '@/landing-page/hooks/use-landing-page';

import { CustomArtistItemLoader } from '@/components/custom-artist-item-loader';
import { CustomContentWrapper } from '@/components/custom-content-wrapper';
import { CustomSectionItemLoader } from '@/components/custom-section-item-loader';
import { CustomSectionLoader } from '@/components/custom-section-loader';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

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
