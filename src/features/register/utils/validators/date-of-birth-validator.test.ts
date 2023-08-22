import { NamePath } from 'antd/es/form/interface';

import { isAllowedAge, isValidDate } from '@/register/helpers';

import { dateOfBirthValidator } from './date-of-birth-validator';

jest.mock('@/register/helpers', () => ({
  isAllowedAge: jest.fn(),
  isValidDate: jest.fn(),
}));

describe('dateOfBirthValidator', () => {
  let getFieldValue: (name: NamePath) => string | undefined;

  beforeEach(() => {
    getFieldValue = jest.fn().mockImplementation((field) => (field === 'year' ? '2000' : '01'));
  });

  it('should reject with "Invalid date" if date is not valid', () => {
    (isValidDate as jest.Mock).mockReturnValue(false);

    const validator = dateOfBirthValidator(getFieldValue);
    expect(validator()).rejects.toEqual('Invalid date');
  });

  it('should reject with "Account permitted for individuals over the age of 12" if age is not allowed', () => {
    (isValidDate as jest.Mock).mockReturnValue(true);
    (isAllowedAge as jest.Mock).mockReturnValue(false);

    const validator = dateOfBirthValidator(getFieldValue);
    expect(validator()).rejects.toEqual('Account permitted for individuals over the age of 12');
  });

  it('should resolve if date is valid and age is allowed', () => {
    (isValidDate as jest.Mock).mockReturnValue(true);
    (isAllowedAge as jest.Mock).mockReturnValue(true);

    const validator = dateOfBirthValidator(getFieldValue);
    expect(validator()).resolves.toBeUndefined();
  });
});
