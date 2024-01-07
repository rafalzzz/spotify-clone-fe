import dynamic from 'next/dynamic';
import { FC } from 'react';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import { ResultPage } from '@/types/components';

const TrackResult: FC<ResultPage> = ({ params: { id } }): JSX.Element => (
  <CustomContentWrapper>
    <p>Track Id - {id}</p>
    <br />
    <p>
      Endpoint to fetch information about music track - {process.env.NEXT_PUBLIC_API_ITUNES}
      /lookup?id=
      {id}
    </p>
  </CustomContentWrapper>
);

export default dynamic(() => Promise.resolve(TrackResult), { ssr: false });
