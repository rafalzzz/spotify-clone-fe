import { BasicLayout } from '@/components/basic-layout';
import { CustomContentWrapper } from '@/components/custom-content-wrapper';
import { CustomSection } from '@/components/custom-section';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const LandingPage = () => (
  <BasicLayout>
    <CustomContentWrapper>
      <h1>Welcome</h1>
      <CustomSection title='Latest songs' redirectionUrl='/latest-songs' />
    </CustomContentWrapper>
  </BasicLayout>
);

export default LandingPage;
