import { PasswordResetCompleteForm } from '@/password-reset/components/password-reset-complete-form';

import { CustomHeader } from '@/shared/components';

import '@/styles/globals.scss';
import '@/styles/properties.scss';
import './PasswordResetCompletePage.scss';

const PasswordResetComplete = () => (
  <div className='password-reset-complete-page'>
    <CustomHeader title='Password reset' />
    <main className='password-reset-complete-page__content'>
      <PasswordResetCompleteForm />
    </main>
  </div>
);

export default PasswordResetComplete;
