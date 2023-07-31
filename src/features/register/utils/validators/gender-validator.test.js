import { genderValidator } from './gender-validator';

describe('genderValidator', () => {
  it('should reject with "Choose your gender" if value is not provided', () => {
    expect(genderValidator({}, '')).rejects.toEqual(new Error('Choose your gender'));
  });

  it('should resolve if value is provided', () => {
    expect(genderValidator({}, 'Male')).resolves.toBeUndefined();
  });
});
