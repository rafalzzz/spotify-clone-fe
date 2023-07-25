import { renderHook } from '@testing-library/react-hooks';
import { notification } from 'antd';
import { act } from 'react-test-renderer';

import { useDisplayError } from '../';

jest.mock('antd', () => ({
  notification: {
    useNotification: jest.fn(),
  },
}));

describe('useDisplayError', () => {
  it('calls antd notification error with correct arguments', () => {
    const mockNotificationApi = { error: jest.fn() };
    const mockContextHolder = jest.fn();

    notification.useNotification.mockReturnValue([mockNotificationApi, mockContextHolder]);

    const { result } = renderHook(() => useDisplayError());

    const testDescription = 'Test error description';

    act(() => {
      result.current.displayError(testDescription);
    });

    expect(mockNotificationApi.error).toHaveBeenCalledWith({
      message: null,
      description: testDescription,
      duration: 3,
      closeIcon: true,
    });
  });
});
