import { FC, PropsWithChildren } from 'react';

import { TContextMenuCell } from '@/favorites/types';

import { useNotificationContext } from '@/contexts/notification-context';

import { CustomContextMenu } from '@/components/custom-context-menu';

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useSongContextMenu } from '@/hooks/use-song-context-menu';

export const ContextMenuCell: FC<PropsWithChildren<TContextMenuCell>> = ({ children, record }) => {
  const { api } = useNotificationContext();
  const copytoClipboard = useCopyToClipboard(api);
  const items = useSongContextMenu({ song: record, isFavorite: true, copytoClipboard });

  return <CustomContextMenu items={items}>{children}</CustomContextMenu>;
};
