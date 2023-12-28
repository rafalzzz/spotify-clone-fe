import { renderHook, act } from '@testing-library/react-hooks';
import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';

import { useCopyToClipboard } from '../';

jest.mock('antd', () => {
  const actualAntd = jest.requireActual('antd');
  return {
    ...actualAntd,
    notification: {
      ...actualAntd.notification,
      useNotification: jest.fn(),
    },
  };
});

const renderUseCopyToClipboard = () => renderHook(() => useCopyToClipboard());

describe('useCopyToClipboard', () => {
  let mockWriteText: jest.Mock;
  let mockApi: Partial<NotificationInstance>;

  beforeEach(() => {
    mockWriteText = jest.fn();

    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });

    mockApi = { info: jest.fn(), error: jest.fn() };
    (notification.useNotification as jest.Mock).mockReturnValue([mockApi, <div key='1' />]);
  });

  it('should copy text to clipboard and show success notification', async () => {
    const { result } = renderUseCopyToClipboard();
    const textToCopy = 'Test text';

    mockWriteText.mockResolvedValue(undefined);

    await act(async () => {
      result.current.copytoClipboard(textToCopy);
    });

    expect(mockWriteText).toHaveBeenCalledWith(textToCopy);
    expect(mockApi.info).toHaveBeenCalledWith(
      expect.objectContaining({
        description: 'Link copied to clipboard.',
      }),
    );
  });

  it('should show error notification on clipboard copy failure', async () => {
    const { result } = renderUseCopyToClipboard();
    const error = new Error('copy failed');
    mockWriteText.mockRejectedValue(error);

    await act(async () => {
      result.current.copytoClipboard('Test text');
    });

    expect(mockApi.error).toHaveBeenCalledWith(
      expect.objectContaining({
        description: error,
      }),
    );
  });
});
