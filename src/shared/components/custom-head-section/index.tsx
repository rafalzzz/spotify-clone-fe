import Head from 'next/head';

type CustomHeadProps = { title: string; icon?: string; description: string; keywords: string };

export const CustomHeadSection = ({
  title,
  icon = '/spotify.svg',
  description,
  keywords,
}: CustomHeadProps) => (
  <Head>
    <title>{title}</title>
    <link rel='icon' href={icon} type='image/svg+xml' />
    <meta name='theme-color' content='#ffffff' />
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords} />
  </Head>
);
