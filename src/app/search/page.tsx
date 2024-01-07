import dynamic from 'next/dynamic';
import { FC } from 'react';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

const Search: FC = (): JSX.Element => (
  <CustomContentWrapper>Add search-term to url</CustomContentWrapper>
);

export default dynamic(() => Promise.resolve(Search), { ssr: false });
