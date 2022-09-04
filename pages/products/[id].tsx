import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { client } from '../../utils/client';
import urlFor from '../../utils/imgBuilder';
import { Snowboard } from '../shop';
import { BsShare } from 'react-icons/bs';

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
    <div className='flex justify-center mt-20 flex-col overflow-hidden'>
      <h1 className='text-4xl text-center font-poppins font-extrabold z-10'>
        {product?.name}
      </h1>
      <div className='mt-6  text-center scale-125 bg h-30'>
        <Image
          src={
            product && product?.img
              ? urlFor(product.img?.asset?._ref).url()
              : '/snowboarder.png'
          }
          width='400'
          height='330'
          alt={product?.brand}
          className=' -rotate-90'
        />
      </div>

      {/* buy and share options */}

      <div className='flex flex-col justify-center gap-y-8 sm:gap-y-0  sm:flex-row sm:justify-between mt-20  py-12 items-center sm:items-end font-poppins mx-8 lg:mx-20'>
        <div className='flex items-center justify-center w-full sm:w-auto'>
          <Image src='/assets/Coin.png' height={40} width={40} alt='money' />

          <h2 className='text-xl text-black opacity-60 mt-1 font-bold'>
            Price: $48
          </h2>
        </div>
        <div className='flex flex-col sm:flex-row gap-x-4  w-full sm:w-auto sm:gap-y-0 gap-y-6'>
          <div className='w-full sm:w-auto'>
            <button className='action_btns relative w-full'>
              <p>Add to Cart</p>
              <Image src='/assets/cart.png' height={30} width={30} alt='bag' />
            </button>
          </div>
          <div className='w-full sm:w-auto'>
            <button className='action_btns w-full'>
              <p>Share</p>
              <BsShare />
            </button>
          </div>
        </div>
      </div>

      <div className='product_details relative bg-black text-white p-6 mt-20 flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-center  font-poppins  h-auto'>
        {/* Features */}

        <div className='product_features flex-col items-center mt-12 lg:mt-0 md:w-1/2 lg:w-1/3'>
          <h3 className=' text-white  font-bold'>
            <>Features:</>
          </h3>
          <div className='add_flex'>
            <h4>Brand:</h4>
            <p>{product?.brand}</p>
          </div>
          {product?.features?.bend && (
            <div className='add_flex'>
              <h4>Bend:</h4>
              <p> {product?.features?.bend}</p>
            </div>
          )}

          {product?.features?.base && (
            <div className='add_flex'>
              <h4>Base:</h4>
              <p> {product?.features?.base}</p>
            </div>
          )}
          {product?.features?.construction && (
            <div className='add_flex'>
              <h4>Construction:</h4>
              <p>{product?.features?.construction}</p>
            </div>
          )}

          {product?.features?.core && (
            <div className='add_flex'>
              <h4>Core:</h4>

              <p>{product?.features?.core}</p>
            </div>
          )}
          {product?.features?.reinforcement && (
            <div className='add_flex'>
              <h4>Reinforcement:</h4>
              <p>{product?.features?.reinforcement}</p>
            </div>
          )}
          {product?.features?.sidewall && (
            <div className='add_flex'>
              <h4>Sidewall:</h4>
              <p> {product?.features?.sidewall}</p>
            </div>
          )}
        </div>

        {/* measurements and parameters */}
        <div className='product_features flex-col md:w-1/2 md:mt-12 lg:mt-0 lg:w-1/4'>
          <h3 className=' text-white font-bold'>
            {product?.measurements_and_parameters && <>Measurements:</>}
          </h3>

          {product?.measurements_and_parameters?.[0].length && (
            <div className='add_flex'>
              <h4>Length:</h4>
              <p> {product?.measurements_and_parameters?.[0].length}</p>
            </div>
          )}

          {product?.measurements_and_parameters?.[0].nose_width && (
            <div className='add_flex'>
              <h4>Nose Width:</h4>
              <p> {product?.measurements_and_parameters?.[0].nose_width}</p>
            </div>
          )}
          {product?.measurements_and_parameters?.[0].riders_weight && (
            <div className='add_flex'>
              <h4>Rider&apos;s Weight:</h4>
              <p>{product?.measurements_and_parameters?.[0].riders_weight}</p>
            </div>
          )}

          {product?.measurements_and_parameters?.[0].running_length && (
            <div className='add_flex'>
              <h4>Running length:</h4>

              <p>{product?.measurements_and_parameters?.[0].running_length}</p>
            </div>
          )}
          {product?.measurements_and_parameters?.[0].setback && (
            <div className='add_flex'>
              <h4>Setback:</h4>
              <p>{product?.measurements_and_parameters?.[0].setback}</p>
            </div>
          )}
          {product?.measurements_and_parameters?.[0].sidecut_width && (
            <div className='add_flex'>
              <h4>Sidecut Width:</h4>
              <p> {product?.measurements_and_parameters?.[0].sidecut_width}</p>
            </div>
          )}

          {product?.measurements_and_parameters?.[0].sidecut_radius && (
            <div className='add_flex'>
              <h4>Sidecut Radius:</h4>
              <p> {product?.measurements_and_parameters?.[0].sidecut_radius}</p>
            </div>
          )}

          {product?.measurements_and_parameters?.[0].size && (
            <div className='add_flex'>
              <h4>Size:</h4>
              <p> {product?.measurements_and_parameters?.[0].size}</p>
            </div>
          )}

          {product?.measurements_and_parameters?.[0].stance_width && (
            <div className='add_flex'>
              <h4>Stance Width:</h4>
              <p> {product?.measurements_and_parameters?.[0].stance_width}</p>
            </div>
          )}

          {product?.measurements_and_parameters?.[0].tail_width && (
            <div className='add_flex'>
              <h4>Tail Width:</h4>
              <p> {product?.measurements_and_parameters?.[0].tail_width}</p>
            </div>
          )}

          {product?.measurements_and_parameters?.[0].waist_width && (
            <div className='add_flex'>
              <h4>Waist Width:</h4>
              <p> {product?.measurements_and_parameters?.[0].waist_width}</p>
            </div>
          )}
        </div>
        {/* about */}
        <div className='lg:w-1/3 flex flex-col'>
          <h3 className='text-white font-bold '>About:</h3>
          <p className=''>{product?.description}</p>
        </div>
        <div className='absolute -left-10 -top-20'>
          {/* <Image src='/assets/Toa.png' width='200' height='200' alt='toa' /> */}
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
