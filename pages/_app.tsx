import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';

import 'src/styles/main.css';

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>The Biggest Video Game Database on RAWG - Video Game Discovery Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default RootApp;
