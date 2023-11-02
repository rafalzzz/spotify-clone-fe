import { ReactNode } from 'react';

import { BasicLayout } from '@/components/basic-layout';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

type SearchProps = {
  children: ReactNode;
};

const Search = ({ children }: SearchProps) => <BasicLayout>{children}</BasicLayout>;

export default Search;
