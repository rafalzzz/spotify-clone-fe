import { MainContent } from '@/password-reset/components/main-content';

import { CustomHeader, CustomSubheader } from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';
import './LoginPage.scss';

const PasswordReset = () => (
  <div className='login-page'>
    <CustomHeader title='Password reset' />
    <CustomSubheader
      title={
        <>
          Enter your <b>Spotify</b> username or the email address you used to sign up. We will send
          you an email with your username and a link to reset your password.
        </>
      }
    />
    <MainContent />
  </div>
);

export default PasswordReset;
