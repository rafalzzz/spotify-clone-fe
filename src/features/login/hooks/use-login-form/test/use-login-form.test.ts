import { renderHook, act } from '@testing-library/react-hooks';

import { ELoginFormKeys } from '@/login/types';
import { loginUser } from '@/login/utils/requests/login-user';

import { useLoginForm } from '..';

const displayError = jest.fn();
const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}));

jest.mock('antd', () => ({
  Form: { useForm: jest.fn() },
}));

jest.mock('@/login/utils/requests/login-user', () => ({
  loginUser: jest.fn(() => new Promise((resolve) => setTimeout(() => resolve(''), 500))),
}));

const LOGIN_FORM_MOCKED_VALUES = {
  [ELoginFormKeys.LOGIN]: 'mockedLogin',
  [ELoginFormKeys.PASSWORD]: 'mockedPassword',
  [ELoginFormKeys.REMEMBER_ME]: false,
};

const renderUseLoginForm = () => renderHook(() => useLoginForm({ displayError }));

describe('useLoginForm', () => {
  afterEach(() => {
    (loginUser as jest.Mock).mockReset();
  });

  it('should call push method from useRouter when response return empty string', async () => {
    const { result, waitForNextUpdate } = renderUseLoginForm();

    expect(mockPush).not.toHaveBeenCalled();

    act(() => {
      result.current.onFinish(LOGIN_FORM_MOCKED_VALUES);
    });

    await waitForNextUpdate();

    expect(mockPush).toHaveBeenCalled();
  });

  it('should call displayError function when response return error message', async () => {
    (loginUser as jest.Mock).mockRejectedValue('Error');
    const { result, waitForNextUpdate } = renderUseLoginForm();

    expect(displayError).not.toHaveBeenCalled();

    await act(async () => {
      result.current.onFinish(LOGIN_FORM_MOCKED_VALUES);
      await waitForNextUpdate();
    });

    expect(displayError).toHaveBeenCalled();
  });

  it('should disable form button while request is pending', async () => {
    const { result, waitForNextUpdate } = renderUseLoginForm();

    expect(result.current.submitButton.disabled).toBe(false);

    act(() => {
      result.current.onFinish(LOGIN_FORM_MOCKED_VALUES);
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
