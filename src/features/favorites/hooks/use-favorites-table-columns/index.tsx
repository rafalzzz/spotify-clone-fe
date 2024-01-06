'use client';
import type { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';

import { ContextMenuCell } from '@/favorites/components/context-menu-cell';

import { TSongItem } from '@/types/components';
import { EMusicTrackKeys } from '@/types/music-track';

export const useFavoritesTableColumns = (): ColumnsType<TSongItem> => {
  const columns = useMemo(
    (): ColumnsType<TSongItem> => [
      {
        title: '#',
        key: EMusicTrackKeys.TRACK_ID,
        render: (_, record, index) => (
          <ContextMenuCell record={record}>
            <div style={{ width: '100%', height: '100%' }}>{index}</div>
          </ContextMenuCell>
        ),
      },
      /*   {
      title: 'Title',
      key: EMusicTrackKeys.TRACK_ID,
      render: (_, record) => (
        <ContextMenuCell record={record}>
          <div style={{ width: '100%', height: '100%' }}>{record[EMusicTrackKeys.TRACK_NAME]}</div>
        </ContextMenuCell>
      ),
    }, */
    ],
    [],
  );

  return columns;
};
