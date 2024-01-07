import dynamic from 'next/dynamic';
import { FC } from 'react';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

import { ResultPage } from '@/types/components';

const AlbumResult: FC<ResultPage> = ({ params: { id } }) => (
  <CustomContentWrapper>
    <p>Album Id - {id}</p>
    <br />
    <p>
      Endpoint to fetch album songs - {process.env.NEXT_PUBLIC_API_ITUNES}/lookup?id={id}
      &entity=song
    </p>
  </CustomContentWrapper>
);

export default dynamic(() => Promise.resolve(AlbumResult), { ssr: false });
