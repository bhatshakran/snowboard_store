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

  console.log(product);

  return (
    <div className='flex justify-center mt-20 flex-col'>
      <h1 className='text-4xl text-center font-poppins font-extrabold'>
        {product?.name}
      </h1>
      <div className='mt-12 text-center'>
        <Image
          src={
            product && product?.img
              ? urlFor(product.img?.asset?._ref)
                  .width(390)
                  .height(930)
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

      <div className='product_details bg-black text-gray-300 p-6 mt-12'>
        <div>
          <h4>Brand:</h4>
          <p>{product?.brand}</p>
        </div>

        <div>
          <h4>About:</h4>
          <p>{product?.description}</p>
        </div>

        {/* Features */}
        <div className='product_features flex-col '>
          <h3 className=' text-green-300 opacity-80 font-bold'>
            {product?.features && <>Features:</>}
          </h3>

          <div>
            {product?.features?.bend && (
              <>
                <h4>Bend:</h4>
                <p> {product?.features?.bend}</p>
              </>
            )}
          </div>

          <div>
            {product?.features?.base && (
              <>
                <h4>Base:</h4>
                <p> {product?.features?.base}</p>
              </>
            )}
          </div>
          <div>
            {product?.features?.construction && (
              <>
                <h4>Construction:</h4>
                <p>{product?.features?.construction}</p>
              </>
            )}
          </div>

          <div>
            {product?.features?.core && (
              <>
                <h4>Core:</h4>

                <p>{product?.features?.core}</p>
              </>
            )}
          </div>
          <div>
            {product?.features?.reinforcement && (
              <>
                <h4>Reinforcement:</h4>
                <p>{product?.features?.reinforcement}</p>
              </>
            )}
          </div>
          <div>
            {product?.features?.sidewall && (
              <>
                <h4>Sidewall:</h4>
                <p> {product?.features?.sidewall}</p>
              </>
            )}
          </div>
        </div>
      </div>
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
