'use client';
import { notification } from 'antd';
import dynamic from 'next/dynamic';
import { FC, Suspense } from 'react';

import { ArtistsSection } from '@/landing-page/components/artists-section';
import { LoveAlbumsSection } from '@/landing-page/components/love-albums-section';
import { LoveSongsSection } from '@/landing-page/components/love-songs-section';
import { TMainContent } from '@/landing-page/types';

import { NotificationContextProvider } from '@/contexts/notification-context';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import {
  CustomArtistItemLoader,
  CustomSectionItemLoader,
  CustomSectionLoader,
} from '@/shared/server-components';

const MainContent: FC<TMainContent> = ({ songs, albums, artists }): JSX.Element => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationContextProvider api={api}>
      <CustomContentWrapper>
        {contextHolder}
        <h1>Welcome</h1>
        <Suspense fallback={<CustomSectionLoader SectionItemLoader={CustomSectionItemLoader} />}>
          <LoveSongsSection songs={songs} />
        </Suspense>
        <Suspense fallback={<CustomSectionLoader SectionItemLoader={CustomSectionItemLoader} />}>
          <LoveAlbumsSection albums={albums} />
        </Suspense>
        <Suspense fallback={<CustomSectionLoader SectionItemLoader={CustomArtistItemLoader} />}>
          <ArtistsSection artists={artists} />
        </Suspense>
      </CustomContentWrapper>
    </NotificationContextProvider>
  );
};

export default dynamic(() => Promise.resolve(MainContent), { ssr: false });
