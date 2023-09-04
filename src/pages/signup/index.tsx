import { Footer } from '@/register/components/footer/Footer';
import { RegisterForm } from '@/register/components/register-form';

import { CustomHeader, CustomMainContentWrapper, CustomPageWrapper } from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const Register = () => (
  <CustomPageWrapper>
    <CustomHeader title='Create an account' />
    <CustomMainContentWrapper>
      <RegisterForm />
    </CustomMainContentWrapper>
    <Footer />
  </CustomPageWrapper>
);

export default Register;
