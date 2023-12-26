import { notification } from 'antd';
import { useCallback } from 'react';

import { TUseCopyToClipboard } from '@/types/hooks';

import './CopyToClipboard.scss';

const CONTEXT_MENU_STYPES = {
  width: 'auto',
  padding: '10px 10px 20px 10px',
  marginBottom: '100px',
};

export const useCopyToClipboard = (): TUseCopyToClipboard => {
  const [api, contextHolder] = notification.useNotification();

  const copytoClipboard = useCallback(
    (text: string): void => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          api.info({
            message: null,
            description: 'Link copied to clipboard.',
            duration: 3,
            placement: 'bottom',
            closeIcon: null,
            icon: null,
            style: CONTEXT_MENU_STYPES,
          });
        })
        .catch((err) => {
          api.error({
            message: null,
            description: err,
            duration: 3,
          });
        });
    },
    [api],
  );

  return { contextHolder, copytoClipboard };
};
