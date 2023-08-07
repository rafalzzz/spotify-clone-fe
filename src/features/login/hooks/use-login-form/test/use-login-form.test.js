import { renderHook, act } from '@testing-library/react-hooks';
import { Form } from 'antd';
import { useRouter } from 'next/navigation';

import { INITIAL_VALUES } from '@/login/consts';
import { loginUser } from '@/login/utils/requests/login-user';

import { useLoginForm } from '..';

const displayError = jest.fn();
const mockPush = jest.fn();

jest.mock('antd', () => ({
  Form: { useForm: jest.fn() },
}));

jest.mock('@/login/utils/requests/login-user', () => ({
  loginUser: jest.fn(() => new Promise((resolve) => setTimeout(() => resolve(''), 500))),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('useLoginForm', () => {
  afterEach(() => {
    loginUser.mockReset();
  });

  it('should call push method from useRouter when response return empty string', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLoginForm({ displayError }));

    expect(mockPush).not.toHaveBeenCalled();

    act(() => {
      result.current.onFinish(INITIAL_VALUES);
    });

    await waitForNextUpdate();

    expect(mockPush).toHaveBeenCalled();
  });

  it('should call displayError function when response return error message', async () => {
    loginUser.mockRejectedValue('Error');
    const { result, waitForNextUpdate } = renderHook(() => useLoginForm({ displayError }));

    expect(displayError).not.toHaveBeenCalled();

    await act(async () => {
      result.current.onFinish(INITIAL_VALUES);
      await waitForNextUpdate();
    });

    expect(displayError).toHaveBeenCalled();
  });

  it('should disable form button while request is pending', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLoginForm({ displayError }));

    expect(result.current.formButtons[0].disabled).toBe(false);

    act(() => {
      result.current.onFinish(INITIAL_VALUES);
    });

    // Check if the form button is disabled immediately after onFinish is called
    expect(result.current.formButtons[0].disabled).toBe(true);

    await act(async () => {
      await waitForNextUpdate();
    });

    // Check if the form button is enabled again after onFinish
    expect(result.current.formButtons[0].disabled).toBe(false);
  });
});
