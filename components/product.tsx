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
  console.log(product);
  if (product.img) {
    console.log(
      urlFor(product.img?.asset?._ref).width(500).height(300).fit('scale').url()
    );
  }
  return (
    <div className='border border-gray-100 shadow-md p-2 w-52 rounded-md'>
      <Image
        src={
          product.img
            ? urlFor(product.img?.asset?._ref)
                .width(390)
                .height(900)
                .fit('crop')
                .crop('top')
                .url()
            : '/snowboarder.png'
        }
        width='200'
        height='280'
        alt={product.brand}
      />

      <div>
        <div className='font-poppins font-bold mt-6 text-center '>
          <Link href={`products/${product._id}`}>{product.name}</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
