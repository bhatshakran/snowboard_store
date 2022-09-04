import React from 'react';
import type { NextPage } from 'next';
import { client } from '../../utils/client';
import Image from 'next/image';
import ProductCard from '../../components/product';

export interface Snowboard {
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
    sidecut_radius?: string;
    size: string;
    stance_width?: string;
    tail_width?: string;
    waist_width?: string;
  }[];
  img: { asset: { _ref: string }; _type: string };
  name: string;
  _id: string;
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
          height={'50%'}
        />
        <h2 className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 text-center text-4xl md:text-6xl text-gray-100 font-poppins font-extrabold '>
          Shop
        </h2>
      </div>

      <div className='flex flex-col items-center mt-20 gap-y-8'>
        <h2 className='text-4xl font-extrabold font-poppins'>Features</h2>
        <p className='text-4xl font-extrabold font-poppins'>X</p>
        <div className='products_wrapper flex flex-wrap gap-x-4 gap-y-8 px-2 justify-center'>
          {data.map((data) => {
            return <ProductCard product={data} key={data._id} />;
          })}
        </div>
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
