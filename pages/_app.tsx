import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HomeNav from '../components/homeNav';
// import dynamic from 'next/dynamic';

// const HomeNav = dynamic(() => import('../components/homeNav'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HomeNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
