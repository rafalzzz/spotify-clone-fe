import { FC, PropsWithChildren } from 'react';

import '@/styles/globals.scss';
import '@/styles/properties.scss';

const Layout: FC<PropsWithChildren> = ({ children }): JSX.Element => <>{children}</>;

export default Layout;
