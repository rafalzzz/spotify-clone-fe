import { genderValidator } from './gender-validator';

describe('genderValidator', () => {
  it('should reject with "Choose your gender" if value is not provided', () => {
    const validator = genderValidator({}, '');
    expect(validator).rejects.toEqual(new Error('Choose your gender'));
  });

  it('should resolve if value is provided', () => {
    const validator = genderValidator({}, 'Male');
    expect(validator).resolves.toBeUndefined();
  });
});
