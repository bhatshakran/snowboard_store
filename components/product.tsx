import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import urlFor from '../utils/imgBuilder';

interface Snowboard {
  product: {
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
    img: { asset: { _ref: string }; _type: string };
    name: string;
    _id: string;
  };
}

const ProductCard: NextPage<Snowboard> = ({ product }: Snowboard) => {
  return (
    <div className='border w-32 sm:w-56 border-gray-100 shadow-md p-1 sm:p-2  rounded-md'>
      <Image
        src={
          product.img
            ? urlFor(product.img?.asset?._ref).url()
            : '/assets/Box.png'
        }
        width='220'
        height='240'
        alt={product.brand}
      />

      <div>
        <div className='font-poppins font-bold mt-2 sm:mt-6 text-center '>
          <Link href={`/products/${product._id}`}>
            <a className=' text-xs'>{product.name}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
