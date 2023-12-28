import { MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useCallback, useMemo } from 'react';

import { TUseArtistContextMenu } from '@/types/hooks';

import { generateShareArtistUrl } from '@/shared/utils';

import ShareIcon from '@/icons/share';

export const useArtistContextMenu = ({
  artistId,
  copytoClipboard,
}: TUseArtistContextMenu): ItemType[] => {
  const shareArtist = useCallback(() => {
    if (!artistId) {
      return;
    }

    const url = generateShareArtistUrl(artistId);
    copytoClipboard(url);
  }, [artistId, copytoClipboard]);

  const items: MenuProps['items'] = useMemo(
    () => [
      {
        key: 1,
        label: 'Share',
        icon: <ShareIcon />,
        className: 'menu-item',
        onClick: ({ domEvent }) => {
          domEvent.stopPropagation();
          shareArtist();
        },
      },
    ],
    [shareArtist],
  );

  return items;
};
