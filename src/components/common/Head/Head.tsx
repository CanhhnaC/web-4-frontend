import { FC } from 'react';
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';

import seoConfig from '@/src/config/seo.json';

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
    </>
  );
};

export default Head;
