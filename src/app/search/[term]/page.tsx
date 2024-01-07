import dynamic from 'next/dynamic';
import { FC } from 'react';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

type SearchResultProps = {
  params: { term: string };
};

const SearchResult: FC<SearchResultProps> = ({ params: { term } }): JSX.Element => (
  <CustomContentWrapper>
    <p>Term - {term}</p>
    <br />
    <p>
      Endpoint to fetch songs by term - {process.env.NEXT_PUBLIC_API_ITUNES}/search?term={term}
      &media=music&entity=musicTrack
    </p>
    <br />
    <p>
      Endpoint to fetch albums by term - {process.env.NEXT_PUBLIC_API_ITUNES}/search?term={term}
      &media=music&entity=album
    </p>
    <br />
    <p>
      Endpoint to fetch artists by term - {process.env.NEXT_PUBLIC_API_ITUNES}/search?term={term}
      &media=music&entity=musicArtist
    </p>
  </CustomContentWrapper>
);

export default dynamic(() => Promise.resolve(SearchResult), { ssr: false });
