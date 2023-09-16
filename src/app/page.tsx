import { Navbar } from '@/navigation/components/navbar';

import { CustomPageWrapper } from '@/components/custom-page-wrapper';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const LandingPage = () => (
  <CustomPageWrapper className='justify-start'>
    <Navbar />
  </CustomPageWrapper>
);

export default LandingPage;
