import { LoginForm } from '@/login/components/login-form';

import { CustomHyperlink } from '@/components/custom-hyperlink';

import './MainContent.scss';

export const MainContent = () => (
  <main className='main-content'>
    <LoginForm />
    <CustomHyperlink
      href='/reset-password'
      hyperlinkText='Do not you remember the password?'
      className='reset-password-redirection'
    />
  </main>
);
