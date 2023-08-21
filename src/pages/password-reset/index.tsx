import { PasswordResetForm } from '@/password-reset/components/password-reset-form';

import { CustomHeader, CustomSubheader } from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';
import './PasswordResetPage.scss';

const PasswordReset = () => (
  <div className='password-reset-page'>
    <CustomHeader title='Password reset' />
    <CustomSubheader
      title={
        <>
          Enter your <b>Spotify</b> username or the email address you used to sign up. We will send
          you an email with your username and a link to reset your password.
        </>
      }
    />
    <main className='password-reset-page__content'>
      <PasswordResetForm />
    </main>
  </div>
);

export default PasswordReset;
