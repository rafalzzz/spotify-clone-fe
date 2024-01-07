import dynamic from 'next/dynamic';
import { FC } from 'react';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import { ResultPage } from '@/types/components';

const ArtistResult: FC<ResultPage> = ({ params: { id } }): JSX.Element => (
  <CustomContentWrapper>
    <p>Artist Id - {id}</p>
    <br />
    <p>
      Endpoint to fetch artist songs - {process.env.NEXT_PUBLIC_API_ITUNES}/lookup?id={id}
      &entity=song
    </p>
    <br />
    <p>
      Endpoint to fetch artist albums - {process.env.NEXT_PUBLIC_API_ITUNES}/lookup?id={id}
      &entity=album
    </p>
  </CustomContentWrapper>
);

export default dynamic(() => Promise.resolve(ArtistResult), { ssr: false });
