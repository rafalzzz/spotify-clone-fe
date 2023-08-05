import { RegisterForm } from '@/register/components/register-form';

import { CustomHeader } from '@/components/custom-header';

import './page.scss';

const Register = () => (
  <main className='main'>
    <CustomHeader title='Create an account' />
    <RegisterForm />
  </main>
);

export default Register;
