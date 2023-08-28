import { Footer } from '@/login/components/footer';
import { LoginForm } from '@/login/components/login-form';

import {
  CustomHeader,
  CustomHyperlink,
  CustomMainContentWrapper,
  CustomPageWrapper,
} from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';
import './LoginPage.scss';

const Login = () => (
  <CustomPageWrapper>
    <CustomHeader title='Sign in to Spotify' />
    <CustomMainContentWrapper>
      <LoginForm />
      <CustomHyperlink
        href='/password-reset'
        hyperlinkText='Do not you remember the password?'
        className='password-reset-redirection'
      />
    </CustomMainContentWrapper>
    <hr className='separator' />
    <Footer />
  </CustomPageWrapper>
);

export default Login;
