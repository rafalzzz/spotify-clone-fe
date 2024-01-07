import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const LoveSongsPage: FC<PropsWithChildren> = () => (
  <CustomContentWrapper>
    <p>
      Endpoint to fetch love songs - {process.env.NEXT_PUBLIC_API_ITUNES}
      /search?term=love&entity=musicTrack
    </p>
  </CustomContentWrapper>
);

export default dynamic(() => Promise.resolve(LoveSongsPage), { ssr: false });
