import Head from 'next/head';

import { TCustomHeadSection } from '@/types/components';

export const CustomHeadSection = ({
  title,
  icon = '/spotify.png',
  description,
  keywords,
}: TCustomHeadSection): JSX.Element => (
  <Head>
    <title>{title}</title>
    <link rel='icon' href={icon} type='image/svg+xml' />
    <meta name='theme-color' content='#ffffff' />
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords} />
  </Head>
);
