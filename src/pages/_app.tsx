import { AppProps } from 'next/app';
import '@/styles/globals.css';
import MetaTags from '@/components/templates/MetaTgas';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaTags />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
