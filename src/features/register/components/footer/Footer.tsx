import { CustomHyperlink } from '@/components/custom-hyperlink';

import { ROUTES } from '@/consts/routes';

import './Footer.scss';

export const Footer = () => (
  <footer>
    <CustomHyperlink
      href={ROUTES.LOGIN_USER}
      hyperlinkText='Login'
      textBeforeHyperlink='Already have an account?'
      textAfterHyperlink='.'
      className='login-user-redirection'
    />
  </footer>
);
