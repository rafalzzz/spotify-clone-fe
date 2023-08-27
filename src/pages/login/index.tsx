import { Footer } from '@/login/components/footer';
import { LoginForm } from '@/login/components/login-form';

import { CustomHeader } from '@/components/custom-header';
import { CustomHyperlink } from '@/components/custom-hyperlink';

import '@/styles/globals.scss';
import '@/styles/properties.scss';
import './LoginPage.scss';

const Login = () => (
  <div className='login-page'>
    <CustomHeader title='Sign in to Spotify' />
    <main className='login-page__content'>
      <LoginForm />
      <CustomHyperlink
        href='/password-reset'
        hyperlinkText='Do not you remember the password?'
        className='password-reset-redirection'
      />
    </main>
    <hr className='separator' />
    <Footer />
  </div>
);

export default Login;
