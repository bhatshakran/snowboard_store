import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Display from '../components/display';
import Hero from '../components/hero';
import { ContentType } from '../types';
import Footer from '../components/footer';
import WhatOthersSay from '../components/whatOthersSay';
import Features from '../components/features';

const Home: NextPage<ContentType> = ({ content }) => {
  return (
    <div>
      <Head>
        <title>Snowboard Store</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='h-screen'>
        <Hero hero={content.hero} />
      </div>
      <Display />
      <Features />
      <WhatOthersSay />
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
