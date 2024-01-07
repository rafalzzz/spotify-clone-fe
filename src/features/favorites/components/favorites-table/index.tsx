'use client';
import { notification, Table } from 'antd';
import dynamic from 'next/dynamic';

import { useFavoritesTableColumns } from '@/favorites/hooks/use-favorites-table-columns';

import { useFavoritesStore } from '@/store/favorites';

import { NotificationContextProvider } from '@/contexts/notification-context';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import './FavoritesTable.scss';

const FavoritesTableWrapper = (): JSX.Element => {
  const favorites = useFavoritesStore(({ favorites }) => favorites);
  const columns = useFavoritesTableColumns();

  return <Table columns={columns} dataSource={favorites} pagination={false} bordered={false} />;
};

const FavoritesTable = (): JSX.Element => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <CustomContentWrapper>
      <>
        {contextHolder}
        <NotificationContextProvider api={api}>
          <FavoritesTableWrapper />
        </NotificationContextProvider>
      </>
    </CustomContentWrapper>
  );
};

export default dynamic(() => Promise.resolve(FavoritesTable), { ssr: false });
