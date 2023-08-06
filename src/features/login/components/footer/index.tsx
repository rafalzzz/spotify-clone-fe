import { CustomHyperlink } from '@/components/custom-hyperlink';

import './Footer.scss';

export const Footer = () => (
  <footer>
    <CustomHyperlink
      href='/'
      textBeforeHyperlink='You dont have an account yet?'
      hyperlinkText='Sign up for Spotify'
      className='sign-up-redirection'
    />
  </footer>
);
