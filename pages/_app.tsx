import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HomeNav from '../components/homeNav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HomeNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
