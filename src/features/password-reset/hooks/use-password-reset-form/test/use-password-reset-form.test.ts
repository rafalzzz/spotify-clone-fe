import { renderHook, act } from '@testing-library/react-hooks';

import { passwordReset } from '@/password-reset/requests/password-reset';
import { EPasswordResetFormKeys } from '@/password-reset/types';

import { usePasswordResetForm } from '..';

const displayError = jest.fn();
const mockPush = jest.fn();

jest.mock('antd', () => ({
  Form: { useForm: jest.fn() },
}));

jest.mock('@/password-reset/requests/password-reset', () => ({
  passwordReset: jest.fn(() => new Promise((resolve) => setTimeout(() => resolve(''), 500))),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

const PASSWORD_RESET_FORM_MOCKED_VALUES = {
  [EPasswordResetFormKeys.LOGIN]: 'mockedLogin',
};

const renderUsePasswordResetForm = () => renderHook(() => usePasswordResetForm({ displayError }));

describe('usePasswordResetForm', () => {
  afterEach(() => {
    (passwordReset as jest.Mock).mockReset();
  });

  it('should call push method from useRouter when response return empty string', async () => {
    const { result, waitForNextUpdate } = renderUsePasswordResetForm();

    expect(mockPush).not.toHaveBeenCalled();

    act(() => {
      result.current.onFinish(PASSWORD_RESET_FORM_MOCKED_VALUES);
    });

    await waitForNextUpdate();

    expect(mockPush).toHaveBeenCalled();
  });

  it('should call displayError function when response return error message', async () => {
    (passwordReset as jest.Mock).mockRejectedValue('Error');
    const { result, waitForNextUpdate } = renderUsePasswordResetForm();

    expect(displayError).not.toHaveBeenCalled();

    await act(async () => {
      result.current.onFinish(PASSWORD_RESET_FORM_MOCKED_VALUES);
      await waitForNextUpdate();
    });

    expect(displayError).toHaveBeenCalled();
  });

  it('should disable form button while request is pending', async () => {
    const { result, waitForNextUpdate } = renderUsePasswordResetForm();

    expect(result.current.submitButton.disabled).toBe(false);

    act(() => {
      result.current.onFinish(PASSWORD_RESET_FORM_MOCKED_VALUES);
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
