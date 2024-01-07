import dynamic from 'next/dynamic';
import { FC } from 'react';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const MostFamousDjsPage: FC = (): JSX.Element => (
  <CustomContentWrapper>
    <p>
      Endpoint to fetch DJs - {process.env.NEXT_PUBLIC_API_ITUNES}
      /search?term=dj&entity=musicArtist
    </p>
  </CustomContentWrapper>
);

export default dynamic(() => Promise.resolve(MostFamousDjsPage), { ssr: false });
