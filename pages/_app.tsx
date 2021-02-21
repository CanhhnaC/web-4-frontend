import { AppProps } from 'next/dist/next-server/lib/router/router';
import 'src/styles/main.css';

function RootApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RootApp;
