import { PasswordResetForm } from '@/password-reset/components/password-reset-form';

import {
  CustomHeader,
  CustomMainContentWrapper,
  CustomPageWrapper,
  CustomSubheader,
} from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const PasswordReset = () => (
  <CustomPageWrapper>
    <CustomHeader title='Password reset' />
    <CustomSubheader
      title={
        <>
          Enter your <b>Spotify</b> username or the email address you used to sign up. We will send
          you an email with your username and a link to reset your password.
        </>
      }
    />
    <CustomMainContentWrapper>
      <PasswordResetForm />
    </CustomMainContentWrapper>
  </CustomPageWrapper>
);

export default PasswordReset;
