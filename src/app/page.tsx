import { Sidebar } from '@/sidebar/components/sidebar';

import { Navbar } from '@/navigation/components/navbar';

import { CustomPageWrapper } from '@/components/custom-page-wrapper';

import './LandingPage.scss';
import '@/styles/globals.scss';
import '@/styles/properties.scss';

const LandingPage = () => (
  <CustomPageWrapper className='justify-start'>
    <Sidebar />
    <div className='landing-page__content'>
      <Navbar />
    </div>
  </CustomPageWrapper>
);

export default LandingPage;
