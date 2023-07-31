import { RegisterFormKeys } from '@/register/enums/register-form-keys';

import { NonStandardInputType } from '@/enums/input-type';

export const REGISTER_FORM_LABELS = {
  [RegisterFormKeys.EMAIL]: 'Your e-mail address',
  [RegisterFormKeys.PASSWORD]: 'Create a password',
  [RegisterFormKeys.NICKNAME]: 'How should we address you?',
  [NonStandardInputType.DATE_OF_BIRTH]: 'Enter your date of birth',
  [RegisterFormKeys.DAY]: 'Day',
  [RegisterFormKeys.MONTH]: 'Month',
  [RegisterFormKeys.YEAR]: 'Year',
  [RegisterFormKeys.GENDER]: 'Your gender?',
  [RegisterFormKeys.OFFERS]: 'I want to receive news and offers from Spotify',
  [RegisterFormKeys.SHARE_INFORMATION]:
    'Share my registration information with content providers on Spotify. This information may be used for marketing purposes. Note: According to our Privacy Policy, your data may be sent to a country outside the EEA.',
  [RegisterFormKeys.TERMS]: 'I accept the Spotify Terms of Use.',
};
