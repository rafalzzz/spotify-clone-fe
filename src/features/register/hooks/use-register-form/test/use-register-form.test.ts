import { renderHook, act } from '@testing-library/react-hooks';

import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { registerUser } from '@/register/utils/requests/register-user';

import { useRegisterForm } from '..';

const displayError = jest.fn();
const mockPush = jest.fn();

jest.mock('antd', () => ({
  Form: { useForm: jest.fn() },
}));

jest.mock('@/register/utils/requests/register-user', () => ({
  registerUser: jest.fn(() => new Promise((resolve) => setTimeout(() => resolve(''), 500))),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

const REGISTER_FORM_MOCKED_VALUES = {
  [RegisterFormKeys.EMAIL]: 'mockedEmail',
  [RegisterFormKeys.PASSWORD]: 'mockedPassword',
  [RegisterFormKeys.NICKNAME]: 'mockedNickname',
  [RegisterFormKeys.DAY]: '01',
  [RegisterFormKeys.MONTH]: '01',
  [RegisterFormKeys.YEAR]: '2000',
  [RegisterFormKeys.GENDER]: 1,
  [RegisterFormKeys.OFFERS]: 0,
  [RegisterFormKeys.SHARE_INFORMATION]: 0,
  [RegisterFormKeys.TERMS]: 0,
};

const renderUserRegisterForm = () => renderHook(() => useRegisterForm({ displayError }));

describe('useRegisterForm', () => {
  afterEach(() => {
    (registerUser as jest.Mock).mockReset();
  });

  it('should call push method from useRouter when response return empty string', async () => {
    const { result, waitForNextUpdate } = renderUserRegisterForm();

    expect(mockPush).not.toHaveBeenCalled();

    act(() => {
      result.current.onFinish(REGISTER_FORM_MOCKED_VALUES);
    });

    await waitForNextUpdate();

    expect(mockPush).toHaveBeenCalled();
  });

  it('should call displayError function when response return error message', async () => {
    (registerUser as jest.Mock).mockRejectedValue('Error');
    const { result, waitForNextUpdate } = renderUserRegisterForm();

    expect(displayError).not.toHaveBeenCalled();

    await act(async () => {
      result.current.onFinish(REGISTER_FORM_MOCKED_VALUES);
      await waitForNextUpdate();
    });

    expect(displayError).toHaveBeenCalled();
  });

  it('should disable form button while request is pending', async () => {
    const { result, waitForNextUpdate } = renderUserRegisterForm();

    expect(result.current.submitButton.disabled).toBe(false);

    act(() => {
      result.current.onFinish(REGISTER_FORM_MOCKED_VALUES);
    });

    // Check if the form button is disabled immediately after onFinish is called
    expect(result.current.submitButton.disabled).toBe(true);

    await act(async () => {
      await waitForNextUpdate();
    });

    // Check if the form button is enabled again after onFinish
    expect(result.current.submitButton.disabled).toBe(false);
  });
});
