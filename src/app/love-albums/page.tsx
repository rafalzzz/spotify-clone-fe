import dynamic from 'next/dynamic';
import { FC } from 'react';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const LoveAlbumsPage: FC = (): JSX.Element => (
  <CustomContentWrapper>
    <p>
      Endpoint to fetch love albums - {process.env.NEXT_PUBLIC_API_ITUNES}
      /search?term=love&entity=album
    </p>
  </CustomContentWrapper>
);

export default dynamic(() => Promise.resolve(LoveAlbumsPage), { ssr: false });
