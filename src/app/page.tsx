import { Footer } from '@/register/components/footer/Footer';
import { RegisterForm } from '@/register/components/register-form';

import { CustomHeader } from '@/components/custom-header';
import { CustomMainContentWrapper } from '@/components/custom-main-content-wrapper';
import { CustomPageWrapper } from '@/components/custom-page-wrapper';

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
