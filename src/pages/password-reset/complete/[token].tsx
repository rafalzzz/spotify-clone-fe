import dynamic from 'next/dynamic';

import { PasswordResetCompleteForm } from '@/password-reset/components/password-reset-complete-form';

import {
  CustomHeader,
  CustomHeadSection,
  CustomMainContentWrapper,
  CustomPageWrapper,
} from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const PasswordResetComplete = () => (
  <>
    <CustomHeadSection
      title='Password change - Spotify'
      description='Change your password on Spotify'
      keywords='Spotify, password change'
    />
    <CustomPageWrapper>
      <CustomHeader title='Password reset' />
      <CustomMainContentWrapper>
        <PasswordResetCompleteForm />
      </CustomMainContentWrapper>
    </CustomPageWrapper>
  </>
);

export default dynamic(() => Promise.resolve(PasswordResetComplete), { ssr: false });
