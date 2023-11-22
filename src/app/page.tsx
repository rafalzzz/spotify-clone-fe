import PageContent from '@/landing-page/components/page-content';
import { useLandingPage } from '@/landing-page/hooks/use-landing-page';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const LandingPage = async () => {
  const { songs, albums, artists } = await useLandingPage();

  return <PageContent songs={songs} albums={albums} artists={artists} />;
};

export default LandingPage;
