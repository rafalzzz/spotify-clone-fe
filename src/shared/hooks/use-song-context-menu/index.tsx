import { PlusCircleOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import { TSongItem } from '@/types/components';
import { TUseSongContextMenu } from '@/types/hooks';
import { EMusicTrackKeys, TMusicTrack } from '@/types/music-track';

import {
  convertMusicTrackToSongItem,
  generateAlbumRedirectionPath,
  generateArtistRedirectionPath,
  generateShareTrackUrl,
} from '@/shared/utils';

import AlbumIcon from '@/icons/album';
import ArtistIcon from '@/icons/artist';
import ShareIcon from '@/icons/share';

const MOCKED_IS_IN_FAVOTIRES = false;

export const useSongContextMenu = ({ song, copytoClipboard }: TUseSongContextMenu): ItemType[] => {
  const { push } = useRouter();

  const isMusicTrack = (item: TSongItem | TMusicTrack): item is TMusicTrack =>
    EMusicTrackKeys.TRACK_PRICE in item;

  const addToFavorites = useCallback(() => {
    if (isMusicTrack(song)) {
      const songItem = convertMusicTrackToSongItem(song);
      console.log({ songItem });
    }

    console.log({ song });
  }, [song]);

  const shareTrack = useCallback(() => {
    const url = generateShareTrackUrl(song[EMusicTrackKeys.TRACK_ID]);
    copytoClipboard(url);
  }, [song, copytoClipboard]);

  const redirectToAlbum = useCallback(() => {
    const url = generateAlbumRedirectionPath(song[EMusicTrackKeys.COLLECTION_ID]);
    push(url);
  }, [song, push]);

  const redirectToArtist = useCallback(() => {
    const url = generateArtistRedirectionPath(song[EMusicTrackKeys.ARTIST_ID]);
    push(url);
  }, [song, push]);

  const items: MenuProps['items'] = useMemo(
    () => [
      {
        key: 1,
        label: 'Add to favorites',
        icon: <PlusCircleOutlined />,
        className: 'menu-item',
        onClick: ({ domEvent }) => {
          domEvent.stopPropagation();

          if (MOCKED_IS_IN_FAVOTIRES) {
            addToFavorites();
          }
        },
      },
      {
        key: 2,
        label: 'Share',
        icon: <ShareIcon />,
        className: 'menu-item',
        onClick: ({ domEvent }) => {
          domEvent.stopPropagation();
          shareTrack();
        },
      },
      {
        key: 3,
        label: 'Go to album',
        icon: <AlbumIcon />,
        className: 'menu-item',
        onClick: ({ domEvent }) => {
          domEvent.stopPropagation();
          redirectToAlbum();
        },
      },
      {
        key: 4,
        label: 'Go to artist',
        icon: <ArtistIcon />,
        className: 'menu-item',
        onClick: ({ domEvent }) => {
          domEvent.stopPropagation();
          redirectToArtist();
        },
      },
    ],
    [addToFavorites, redirectToAlbum, redirectToArtist, shareTrack],
  );

  return items;
};
