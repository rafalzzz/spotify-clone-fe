'use client';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useCallback } from 'react';

import './CopyToClipboard.scss';
// eslint-disable-next-line import/order

const defaultHeight = '100px';
const footerHeight =
  typeof window !== 'undefined'
    ? getComputedStyle(document.body)?.getPropertyValue('--footer-height')
    : defaultHeight;

const CONTEXT_MENU_STYPES = {
  width: 'auto',
  padding: '10px 10px 20px 10px',
  marginBottom: footerHeight,
};

export const useCopyToClipboard = (api: NotificationInstance): ((text: string) => void) => {
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

  return copytoClipboard;
};
