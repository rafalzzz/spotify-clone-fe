import { Footer } from '@/register/components/footer/Footer';
import { MainContent } from '@/register/components/main-content';

import { CustomHeader } from '@/components/custom-header';

import './page.scss';

const Register = () => (
  <div className='register-page'>
    <CustomHeader title='Create an account' />
    <MainContent />
    <Footer />
  </div>
);

export default Register;
