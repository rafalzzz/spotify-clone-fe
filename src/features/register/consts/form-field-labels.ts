import { ENonStandardInputType } from '@/enums/input-type';

import { ERegisterFormKeys } from '../types';

export const FORM_LABELS = {
  [ERegisterFormKeys.EMAIL]: 'Your e-mail address',
  [ERegisterFormKeys.PASSWORD]: 'Create a password',
  [ERegisterFormKeys.NICKNAME]: 'How should we address you?',
  [ENonStandardInputType.DATE_OF_BIRTH]: 'Enter your date of birth',
  [ERegisterFormKeys.DAY]: 'Day',
  [ERegisterFormKeys.MONTH]: 'Month',
  [ERegisterFormKeys.YEAR]: 'Year',
  [ERegisterFormKeys.GENDER]: 'Your gender?',
  [ERegisterFormKeys.OFFERS]: 'I want to receive news and offers from Spotify',
  [ERegisterFormKeys.SHARE_INFORMATION]:
    'Share my registration information with content providers on Spotify. This information may be used for marketing purposes. Note: According to our Privacy Policy, your data may be sent to a country outside the EEA.',
  [ERegisterFormKeys.TERMS]: 'I accept the Spotify Terms of Use.',
};
