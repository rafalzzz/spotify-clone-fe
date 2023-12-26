import { PlusCircleOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { useCallback, useMemo } from 'react';

import { TUseLoveSongsItemContextMenu } from '@/landing-page/types/types';

import { EMusicTrackKeys } from '@/types/music-track';

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

export const useLoveSongsItemContextMenu = ({ song }: TUseLoveSongsItemContextMenu) => {
  const addToFavorites = useCallback(() => {
    const songItem = convertMusicTrackToSongItem(song);
    console.log({ songItem });
  }, [song]);

  const shareTrack = useCallback(() => {
    const url = generateShareTrackUrl(song[EMusicTrackKeys.TRACK_ID]);
    console.log({ url });
  }, [song]);

  const redirectToAlbum = useCallback(() => {
    const url = generateAlbumRedirectionPath(song[EMusicTrackKeys.COLLECTION_ID]);
    console.log({ url });
  }, [song]);

  const redirectToArtist = useCallback(() => {
    const url = generateArtistRedirectionPath(song[EMusicTrackKeys.ARTIST_ID]);
    console.log({ url });
  }, [song]);

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
