import dynamic from 'next/dynamic';

import { PasswordResetForm } from '@/password-reset/components/password-reset-form';

import {
  CustomHeadSection,
  CustomHeader,
  CustomMainContentWrapper,
  CustomPageWrapper,
  CustomSubheader,
} from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const PasswordReset = (): JSX.Element => (
  <>
    <CustomHeadSection
      title='Password reset - Spotify'
      description='Reset your password on Spotify'
      keywords='Spotify, password reset'
    />
    <CustomPageWrapper>
      <CustomHeader title='Password reset' />
      <CustomSubheader
        title={
          <>
            Enter your <b>Spotify</b> username or the email address you used to sign up. We will
            send you an email with your username and a link to reset your password.
          </>
        }
      />
      <CustomMainContentWrapper>{<PasswordResetForm />}</CustomMainContentWrapper>
    </CustomPageWrapper>
  </>
);

export default dynamic(() => Promise.resolve(PasswordReset), { ssr: false });
