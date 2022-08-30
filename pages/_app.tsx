import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HomeNav from '../components/homeNav';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color='white' options={{ showSpinner: false }} />
      <HomeNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
