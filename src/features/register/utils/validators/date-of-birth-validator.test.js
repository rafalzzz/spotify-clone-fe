import { isAllowedAge, isValidDate } from '@/register/helpers';

import { dateOfBirthValidator } from './date-of-birth-validator';

jest.mock('@/register/helpers', () => ({
  isAllowedAge: jest.fn(),
  isValidDate: jest.fn(),
}));

describe('dateOfBirthValidator', () => {
  let getFieldValue;

  beforeEach(() => {
    getFieldValue = jest.fn().mockImplementation((field) => (field === 'year' ? '2000' : '01'));
  });

  it('should reject with "Invalid date" if date is not valid', () => {
    isValidDate.mockReturnValue(false);

    const validator = dateOfBirthValidator(getFieldValue);
    expect(validator()).rejects.toEqual('Invalid date');
  });

  it('should reject with "Account permitted for individuals over the age of 12" if age is not allowed', () => {
    isValidDate.mockReturnValue(true);
    isAllowedAge.mockReturnValue(false);

    const validator = dateOfBirthValidator(getFieldValue);
    expect(validator()).rejects.toEqual('Account permitted for individuals over the age of 12');
  });

  it('should resolve if date is valid and age is allowed', () => {
    isValidDate.mockReturnValue(true);
    isAllowedAge.mockReturnValue(true);

    const validator = dateOfBirthValidator(getFieldValue);
    expect(validator()).resolves.toBeUndefined();
  });
});
