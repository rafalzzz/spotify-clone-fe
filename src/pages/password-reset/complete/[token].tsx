import { PasswordResetCompleteForm } from '@/password-reset/components/password-reset-complete-form';

import { CustomHeader, CustomMainContentWrapper, CustomPageWrapper } from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const PasswordResetComplete = () => (
  <CustomPageWrapper>
    <CustomHeader title='Password reset' />
    <CustomMainContentWrapper>
      <PasswordResetCompleteForm />
    </CustomMainContentWrapper>
  </CustomPageWrapper>
);

export default PasswordResetComplete;
