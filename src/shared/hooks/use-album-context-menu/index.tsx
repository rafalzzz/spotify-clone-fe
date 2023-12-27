import { MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import { EAlbumKeys } from '@/types/album';
import { TUseAlbumContextMenu } from '@/types/hooks';
import { EMusicTrackKeys } from '@/types/music-track';

import { generateAlbumRedirectionPath, generateShareAlbumUrl } from '@/shared/utils';

import AlbumIcon from '@/icons/album';
import ShareIcon from '@/icons/share';

export const useAlbumContextMenu = ({ album, copytoClipboard }: TUseAlbumContextMenu) => {
  const { push } = useRouter();

  const shareTrack = useCallback(() => {
    const url = generateShareAlbumUrl(album[EAlbumKeys.COLLECTION_ID]);
    copytoClipboard(url);
  }, [album, copytoClipboard]);

  const redirectToAlbum = useCallback(() => {
    const url = generateAlbumRedirectionPath(album[EMusicTrackKeys.COLLECTION_ID]);
    push(url);
  }, [album, push]);

  const items: MenuProps['items'] = useMemo(
    () => [
      {
        key: 1,
        label: 'Share',
        icon: <ShareIcon />,
        className: 'menu-item',
        onClick: ({ domEvent }) => {
          domEvent.stopPropagation();
          shareTrack();
        },
      },
      {
        key: 2,
        label: 'Go to album',
        icon: <AlbumIcon />,
        className: 'menu-item',
        onClick: ({ domEvent }) => {
          domEvent.stopPropagation();
          redirectToAlbum();
        },
      },
    ],
    [redirectToAlbum, shareTrack],
  );

  return items;
};
