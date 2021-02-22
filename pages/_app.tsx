import { FC } from 'react';
import { Head } from '@/src/components/common';
import type { AppProps } from 'next/app';

import '@/src/styles/main.css';

const Noop: FC = ({ children }) => <>{children}</>;

function RootApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default RootApp;
