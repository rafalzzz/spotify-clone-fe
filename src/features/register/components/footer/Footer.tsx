import { CustomHyperlink } from '@/components/custom-hyperlink';

import './Footer.scss';

export const Footer = () => (
  <footer>
    <CustomHyperlink
      href='/login'
      hyperlinkText='Login'
      textBeforeHyperlink='Already have an account?'
      textAfterHyperlink='.'
      className='login-user-redirection'
    />
  </footer>
);
