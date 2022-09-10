import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { client } from '../../utils/client';
import urlFor from '../../utils/imgBuilder';
import { Snowboard } from '../shop';
import { BsShare } from 'react-icons/bs';
import ProductCard from '../../components/product';
import Footer from '../../components/footer';
import Ratings from 'react-ratings-declarative';
import itemExists from '../../utils/hooks/itemExists';

interface Product {
  snowboard: Snowboard;
  similar: Snowboard[];
}

const Index: NextPage<Product> = ({ snowboard, similar }: Product) => {
  const [product, setProduct] = React.useState<Snowboard>();
  const [rating, setRating] = React.useState<number>(3);
  const [buttonText, changeButtonText] = React.useState<string>('Add to Cart');
  const [buttonDisabled, setDisableButton] = React.useState<boolean>();

  const changeRating = () => {
    console.log('x');
  };
  /*  function disableButton() {
    console.log(buttonText);
    return buttonText === 'Add to Cart' ? false : true;
  } */

  const addToCart = () => {
    if (product?.name) {
      const addedItem: {
        name?: string;
        image?: string;
      } = {};
      addedItem.name = product.name;
      if (product.img) {
        addedItem.image = urlFor(product.img?.asset?._ref).url();
      }

      let parsedLsItems;
      const lsItems = localStorage.getItem('cart-items');
      if (lsItems) {
        parsedLsItems = JSON.parse(lsItems);
      }

      if (!lsItems) {
        localStorage.setItem('cart-items', JSON.stringify([addedItem]));
        changeButtonText('Added to Cart');
      } else {
        const exists = itemExists(addedItem?.name);
        if (!exists) {
          localStorage.setItem(
            'cart-items',
            JSON.stringify([...parsedLsItems, addedItem])
          );
          changeButtonText('Added to Cart');
        } else return;
      }
    }
  };

  const itemExistsInCart = React.useCallback(() => {
    let exists;
    if (product?.name) {
      exists = itemExists(product?.name);
    }

    if (exists) {
      changeButtonText('Added to Cart');
      setDisableButton(true);
    } else {
      changeButtonText('Add to Cart');
      setDisableButton(false);
    }
  }, [product?.name]);

  React.useEffect(() => {
    itemExistsInCart();
    Object.values(snowboard).map((el) => {
      setProduct(el);
    });
  }, [itemExistsInCart, snowboard]);

  return (
    <>
      <div className='flex justify-center mt-20 flex-col overflow-hidden'>
        <h1 className='text-3xl sm:text-4xl text-center font-poppins font-extrabold z-10'>
          {product?.name}
        </h1>
        <div className='mt-6  text-center sm:scale-125 bg h-30'>
          <Image
            src={
              product && product.img
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
            <Image
              priority={true}
              src='/assets/Coin.png'
              height={40}
              width={40}
              alt='money'
            />

            <h2 className='text-xl text-black opacity-60 mt-1 font-bold'>
              Price: $48
            </h2>
          </div>
          <div className='flex flex-col sm:flex-row gap-x-4  w-full sm:w-auto sm:gap-y-0 gap-y-6'>
            <div className='w-full sm:w-auto'>
              <button
                className='action_btns relative w-full disabled:bg-black disabled:text-white disabled:shadow-none disabled:border-none'
                onClick={addToCart}
                disabled={buttonDisabled}
              >
                <p>{buttonText}</p>
                <Image
                  src='/assets/cart.png'
                  height={30}
                  width={30}
                  alt='bag'
                />
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

        <div className='product_details relative bg-black text-white px-6 mt-20 flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-center  font-poppins  h-auto pt-12 pb-24'>
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

                <p>
                  {product?.measurements_and_parameters?.[0].running_length}
                </p>
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
                <p>
                  {' '}
                  {product?.measurements_and_parameters?.[0].sidecut_width}
                </p>
              </div>
            )}

            {product?.measurements_and_parameters?.[0].sidecut_radius && (
              <div className='add_flex'>
                <h4>Sidecut Radius:</h4>
                <p>
                  {' '}
                  {product?.measurements_and_parameters?.[0].sidecut_radius}
                </p>
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
        {/* reviews */}
        <div className='reviews_ratings mt-24'>
          <h2 className='text-3xl font-bold font-poppins text-center'>
            Reviews and ratings
          </h2>
          <div className='flex justify-center mt-12'>
            <Ratings
              rating={rating}
              widgetRatedColors='pink'
              changeRating={changeRating}
            >
              <Ratings.Widget widgetHoverColor='pink' />
              <Ratings.Widget widgetHoverColor='pink' />
              <Ratings.Widget
                widgetDimension='60px'
                widgetHoverColor='pink'
                svgIconViewBox='0 0 5 5'
                svgIconPath='M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z'
              />
              <Ratings.Widget widgetHoverColor='pink' />
              <Ratings.Widget widgetHoverColor='pink' />
            </Ratings>
          </div>
        </div>

        {/* similar products */}
        <div className='similar_products mt-24 mb-12'>
          <h2 className='text-3xl font-bold font-poppins text-center'>
            Similar products you might like:
          </h2>
          <div className='flex justify-center flex-wrap gap-2 md:gap-10 mt-16'>
            {similar.map((item, idx) => {
              if (idx < 3) {
                return <ProductCard key={item._id} product={item} />;
              }
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
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
  const similar = await client.fetch(`*[_type == 'snowboard']`);
  return {
    props: { snowboard, similar },
  };
}

export default Index;
