import dynamic from 'next/dynamic';

import './404.scss';

const Notfound = (): JSX.Element => <h1>Page not found</h1>;

export default dynamic(() => Promise.resolve(Notfound), { ssr: false });
