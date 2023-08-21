import { Footer } from '@/register/components/footer/Footer';
import { RegisterForm } from '@/register/components/register-form';

import { CustomHeader } from '@/components/custom-header';

import './page.scss';

const Register = () => (
  <div className='register-page'>
    <CustomHeader title='Create an account' />
    <main className='register-page__content'>
      <RegisterForm />
    </main>
    <Footer />
  </div>
);

export default Register;
