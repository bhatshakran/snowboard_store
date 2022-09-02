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

      <div className='product_details bg-black relative text-white p-6 mt-12 flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-center  font-poppins'>
        {/* Features */}

        <div className='product_features flex-col items-center md:w-1/2 lg:w-1/3'>
          <h3 className=' text-green-300 opacity-80 font-bold'>
            {product?.features && <>Features:</>}
          </h3>
          <div className=''>
            <h4>Brand:</h4>
            <p>{product?.brand}</p>
          </div>
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

        {/* measurements and parameters */}
        <div className='product_features flex-col md:w-1/2 lg:w-1/4'>
          <h3 className=' text-green-300 opacity-80 font-bold'>
            {product?.measurements_and_parameters && <>Measurements:</>}
          </h3>

          <div>
            {product?.measurements_and_parameters?.[0].length && (
              <>
                <h4>Length:</h4>
                <p> {product?.measurements_and_parameters?.[0].length}</p>
              </>
            )}
          </div>

          <div>
            {product?.measurements_and_parameters?.[0].nose_width && (
              <>
                <h4>Nose Width:</h4>
                <p> {product?.measurements_and_parameters?.[0].nose_width}</p>
              </>
            )}
          </div>
          <div>
            {product?.measurements_and_parameters?.[0].riders_weight && (
              <>
                <h4>Rider&apos;s Weight:</h4>
                <p>{product?.measurements_and_parameters?.[0].riders_weight}</p>
              </>
            )}
          </div>

          <div>
            {product?.measurements_and_parameters?.[0].running_length && (
              <>
                <h4>Running length:</h4>

                <p>
                  {product?.measurements_and_parameters?.[0].running_length}
                </p>
              </>
            )}
          </div>
          <div>
            {product?.measurements_and_parameters?.[0].setback && (
              <>
                <h4>Setback:</h4>
                <p>{product?.measurements_and_parameters?.[0].setback}</p>
              </>
            )}
          </div>
          <div>
            {product?.measurements_and_parameters?.[0].sidecut_width && (
              <>
                <h4>Sidewall:</h4>
                <p>
                  {' '}
                  {product?.measurements_and_parameters?.[0].sidecut_width}
                </p>
              </>
            )}
          </div>

          <div>
            {product?.measurements_and_parameters?.[0].sidecut_width && (
              <>
                <h4>Sidecut Width:</h4>
                <p>
                  {' '}
                  {product?.measurements_and_parameters?.[0].sidecut_width}
                </p>
              </>
            )}
          </div>

          <div>
            {product?.measurements_and_parameters?.[0].size && (
              <>
                <h4>Size:</h4>
                <p> {product?.measurements_and_parameters?.[0].size}</p>
              </>
            )}
          </div>

          <div>
            {product?.measurements_and_parameters?.[0].stance_width && (
              <>
                <h4>Stance Width:</h4>
                <p> {product?.measurements_and_parameters?.[0].stance_width}</p>
              </>
            )}
          </div>

          <div>
            {product?.measurements_and_parameters?.[0].tail_width && (
              <>
                <h4>Tail Width:</h4>
                <p> {product?.measurements_and_parameters?.[0].tail_width}</p>
              </>
            )}
          </div>

          <div>
            {product?.measurements_and_parameters?.[0].waist_width && (
              <>
                <h4>Waist Width:</h4>
                <p> {product?.measurements_and_parameters?.[0].waist_width}</p>
              </>
            )}
          </div>
        </div>
        {/* about */}
        <div className='lg:w-1/3 lg:flex lg:flex-col'>
          <h3 className='text-green-300 opacity-80 font-bold '>About:</h3>
          <p className=''>{product?.description}</p>
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
