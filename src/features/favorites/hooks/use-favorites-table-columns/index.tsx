'use client';
import type { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';

import { useFavoritesStore } from '@/store/favorites';

import { formatDuration } from '@/utils/format-duration';

import { TSongItem } from '@/types/components';
import { EMusicTrackKeys } from '@/types/music-track';

export const useFavoritesTableColumns = (): ColumnsType<TSongItem> => {
  const removeFromFavorites = useFavoritesStore(({ removeFromFavorites }) => removeFromFavorites);

  const columns = useMemo(
    (): ColumnsType<TSongItem> => [
      {
        title: '#',
        key: EMusicTrackKeys.TRACK_ID,
        width: 50,
        render: (_, __, index) => index + 1,
      },
      {
        title: 'Artist',
        key: EMusicTrackKeys.ARTIST_NAME,
        dataIndex: EMusicTrackKeys.ARTIST_NAME,
        ellipsis: true,
      },
      {
        title: 'Title',
        key: EMusicTrackKeys.TRACK_NAME,
        dataIndex: EMusicTrackKeys.TRACK_NAME,
        ellipsis: true,
      },
      {
        title: 'Time',
        key: EMusicTrackKeys.TRACK_TIME_MILLIS,
        width: 80,
        render: (_, record) => formatDuration(record[EMusicTrackKeys.TRACK_TIME_MILLIS] / 1000),
      },
      {
        title: ' ',
        key: 'action',
        width: 80,
        render: (_, record) => (
          <button
            onClick={() => {
              removeFromFavorites(record[EMusicTrackKeys.TRACK_ID]);
            }}
          >
            Remove
          </button>
        ),
      },
    ],
    [removeFromFavorites],
  );

  return columns;
};
