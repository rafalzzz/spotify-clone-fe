import { Footer } from '@/login/components/footer';
import { MainContent } from '@/login/components/main-content';

import { CustomHeader } from '@/components/custom-header';

import '@/styles/globals.scss';
import '@/styles/properties.scss';
import './LoginPage.scss';

const Login = () => (
  <div className='login-page'>
    <CustomHeader title='Sign in to Spotify' />
    <MainContent />
    <hr className='separator' />
    <Footer />
  </div>
);

export default Login;
