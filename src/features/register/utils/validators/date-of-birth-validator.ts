import { NamePath } from 'antd/es/form/interface';

import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { isAllowedAge, isValidDate } from '@/register/helpers';

export const dateOfBirthValidator =
  (getFieldValue: (name: NamePath) => string | undefined) => () => {
    const day = getFieldValue(RegisterFormKeys.DAY);
    const month = getFieldValue(RegisterFormKeys.MONTH);
    const year = getFieldValue(RegisterFormKeys.YEAR);

    if (!isValidDate(Number(year), Number(month), Number(day)) || !day || !month || !year) {
      return Promise.reject('Invalid date');
    }

    if (!isAllowedAge(Number(year), Number(month), Number(day))) {
      return Promise.reject('Account permitted for individuals over the age of 12');
    }

    return Promise.resolve();
  };
