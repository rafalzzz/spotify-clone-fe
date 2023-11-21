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

const Register = () => (
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

export default Register;
