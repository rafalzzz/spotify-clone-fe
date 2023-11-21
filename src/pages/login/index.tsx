import { GetServerSidePropsContext } from 'next';

import { Footer } from '@/login/components/footer';
import { LoginForm } from '@/login/components/login-form';

import {
  CustomHeader,
  CustomHeadSection,
  CustomHyperlink,
  CustomMainContentWrapper,
  CustomPageWrapper,
} from '@/shared/components';

import { ROUTES } from '@/consts/routes';

import '@/styles/globals.scss';
import '@/styles/properties.scss';
import './LoginPage.scss';

const Login = () => (
  <>
    <CustomHeadSection
      title='Sign in - Spotify'
      description='Log in to Spotify'
      keywords='Spotify, sign in, login'
    />
    <CustomPageWrapper>
      <CustomHeader title='Sign in to Spotify' />
      <CustomMainContentWrapper>
        <LoginForm />
        <CustomHyperlink
          href={ROUTES.PASSWORD_RESET}
          hyperlinkText='Do not you remember the password?'
          className='password-reset-redirection'
        />
      </CustomMainContentWrapper>
      <hr className='separator' />
      <Footer />
    </CustomPageWrapper>
  </>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 'public, max-age=3600');
  return { props: {} };
}

export default Login;
