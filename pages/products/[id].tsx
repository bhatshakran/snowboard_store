import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { client } from '../../utils/client';
import urlFor from '../../utils/imgBuilder';
import { Snowboard } from '../shop';

interface Product {
  snowboard: Snowboard;
}

const Index: NextPage<Product> = ({ snowboard }) => {
  const [product, setProduct] = React.useState<Snowboard>();

  React.useLayoutEffect(() => {
    Object.values(snowboard).map((el) => {
      setProduct(el);
    });
  }, [snowboard]);

  return (
    <div>
      <Image
        src={
          product && product?.img
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
        alt={product?.brand}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const data = await client.fetch(`*[_type == 'snowboard']`);

  const paths = data.map((doc: any) => {
    return {
      params: {
        id: doc._id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const snowboard = await client.fetch(`*[_id == '${id}']`);
  return {
    props: { snowboard },
  };
}

export default Index;
