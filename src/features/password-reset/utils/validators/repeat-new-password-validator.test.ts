import { RuleObject } from 'antd/es/form';

import { repeatNewPasswordValidator } from './repeat-new-password-validator';

describe('repeatNewPasswordValidator', () => {
  let mockGetFieldValue: jest.Mock;
  let validator: { validator(_: RuleObject, value: string): Promise<void> };

  beforeEach(() => {
    mockGetFieldValue = jest.fn();
    validator = repeatNewPasswordValidator({ getFieldValue: mockGetFieldValue });
  });

  it('should reject when "repeat new password" is empty', async () => {
    mockGetFieldValue.mockReturnValue('Test123!');

    await expect(validator.validator({}, '')).rejects.toThrow('Repeat new password');
  });

  it('should reject when "repeat new password" does not match "new password"', async () => {
    mockGetFieldValue.mockReturnValue('password123');

    await expect(validator.validator({}, 'password456')).rejects.toThrow(
      'The new password that you entered do not match!',
    );
  });

  it('should resolve when "repeat new password" matches "new password"', async () => {
    mockGetFieldValue.mockReturnValue('password123');

    await expect(validator.validator({}, 'password123')).resolves.not.toThrow();
  });
});
