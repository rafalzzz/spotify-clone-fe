import { CustomHyperlink } from '@/components/custom-hyperlink';

import { ROUTES } from '@/consts/routes';

import './Footer.scss';

export const Footer = () => (
  <footer>
    <CustomHyperlink
      href={ROUTES.REGISTER_USER}
      textBeforeHyperlink='You dont have an account yet?'
      hyperlinkText='Sign up for Spotify'
      className='sign-up-redirection'
    />
  </footer>
);
