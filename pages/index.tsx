import type { NextPage } from 'next';
import React, { Ref } from 'react';
import Head from 'next/head';
import Display from '../components/display';
import Hero from '../components/hero';
import HomeNav from '../components/homeNav';
import MountainCard from '../components/mountainCard';
import { ContentType } from '../types';
import Features from '../components/features';
import Footer from '../components/footer';
import { gsap } from 'gsap';

const Home: NextPage<ContentType> = ({ content }) => {
  const [tl, setTl] = React.useState(() =>
    gsap.timeline({ defaults: { duration: 1.3, ease: 'bounce' } })
  );

  return (
    <div>
      <Head>
        <title>Snowboard Store</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='h-screen'>
        <HomeNav timeline={tl} />
        <Hero timeline={tl} hero={content.hero} />
      </div>
      <Display timeline={tl} />
      <MountainCard />
      <Features />
      <Footer />
    </div>
  );
};

Home.defaultProps = {
  content: {
    features: [{ title: 'default feature', body: 'default body' }],
    hero: { title: 'RUN OVER EVERYTHING!', body: 'default body' },
  },
};

export default Home;
