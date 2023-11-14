import { ReactNode } from 'react';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

type SearchProps = {
  children: ReactNode;
};

const Search = ({ children }: SearchProps) => <>{children}</>;

export default Search;
