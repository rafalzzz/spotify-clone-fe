import dynamic from 'next/dynamic';

import { Footer } from '@/register/components/footer/Footer';
import { RegisterForm } from '@/register/components/register-form';

import {
  CustomHeader,
  CustomHeadSection,
  CustomMainContentWrapper,
  CustomPageWrapper,
} from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const Register = (): JSX.Element => (
  <>
    <CustomHeadSection
      title='Sign up - Spotify'
      description='Sign up for Spotify'
      keywords='Spotify, sign up, register, registration'
    />
    <CustomPageWrapper>
      <CustomHeader title='Create an account' />
      <CustomMainContentWrapper>
        <RegisterForm />
      </CustomMainContentWrapper>
      <Footer />
    </CustomPageWrapper>
  </>
);

export default dynamic(() => Promise.resolve(Register), { ssr: false });
