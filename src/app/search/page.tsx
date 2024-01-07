import dynamic from 'next/dynamic';

import { CustomContentWrapper } from '@/components/custom-content-wrapper';

const Search = () => <CustomContentWrapper>Add search-term to url</CustomContentWrapper>;

export default dynamic(() => Promise.resolve(Search), { ssr: false });
