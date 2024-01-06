'use client';
import { notification, Table } from 'antd';
import {} from 'antd';
import dynamic from 'next/dynamic';

import { useFavoritesTableColumns } from '@/favorites/hooks/use-favorites-table-columns';

import { NotificationContextProvider } from '@/contexts/notification-context';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import { mockSongs } from '@/consts/mocks';

const FavoritesTableWrapper = (): JSX.Element => {
  const columns = useFavoritesTableColumns();

  return <Table columns={columns} dataSource={mockSongs} pagination={false} bordered={false} />;
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
