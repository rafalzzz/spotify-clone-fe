import { LoginForm } from '@/login/components/login-form';

import { CustomHeader } from '@/components/custom-header';

import '@/styles/globals.scss';
import '@/styles/properties.scss';
import './LoginPage.scss';

const Login = () => (
  <main className='main'>
    <CustomHeader title='Sign in to Spotify' />
    <LoginForm />
  </main>
);

export default Login;
