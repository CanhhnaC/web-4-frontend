import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { useApollo } from '@/src/apollo/apollo';
import { Head } from '@/src/components/common';

import '@/src/styles/main.css';

const Noop: FC = ({ children }) => <>{children}</>;

function RootApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const apolloClient = useApollo({ initialState: pageProps.initialApolloState as NormalizedCacheObject });

  return (
    <>
      <Head />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default RootApp;
