import { notification } from 'antd';

import { TUseDisplayErrorProps } from '@/types/hooks';

export const useDisplayError = (): TUseDisplayErrorProps => {
  const [api, contextHolder] = notification.useNotification();

  const displayError = (description: string) => {
    api.error({
      message: null,
      description,
      duration: 3,
      closeIcon: true,
    });
  };

  return { displayError, contextHolder };
};
