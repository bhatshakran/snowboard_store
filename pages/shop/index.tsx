import React from 'react';
import type { NextPage } from 'next';
import { client } from '../../utils/client';
import Image from 'next/image';
import { getCurrentBreakpoint } from '../../utils/hooks/getCurrentBreakpoint';

interface Snowboard {
  brand: string;
  description: string;
  features: {
    base?: string;
    bend?: string;
    construction?: string;
    core?: string;
    reinforcement?: string;
    sidewall?: string;
  };
  measurements_and_parameters: {
    length: string;
    running_length?: string;
    nose_width?: string;
    riders_weight?: string;
    setback?: string;
    sidecut_width?: string;
    size: string;
    stance_width?: string;
    tail_width?: string;
    waist_width?: string;
  }[];
  name: string;
}

interface Data {
  data: Snowboard[];
}

const index: NextPage<Data> = ({ data }: Data) => {
  return (
    <div>
      <div className='hero_shop  w-full relative z-0'>
        <Image
          src='/shop.jpeg'
          alt='shop'
          layout='responsive'
          width={'100%'}
          // height={getCurrentBreakpoint() === 'undefined' ? '400' : '43%'}
          height={'43%'}
          priority={true}
        />
        <h2 className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 text-center text-4xl md:text-6xl text-gray-100 font-poppins font-extrabold '>
          Shop
        </h2>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == 'snowboard']`);
  return {
    props: { data },
  };
}

export default index;
