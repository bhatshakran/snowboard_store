import React, { FC } from 'react';
import DisplayItem from './displayItem';
import Carousel from 'nuka-carousel';

interface ProductType {
  products?: { name: string; img_src: string }[];
}

const Display: FC<ProductType> = ({ products }) => {
  return (
    <>
      <div className='mt-16 text-center  '>
        <h1 className='text-5xl font-bold font-poppins'>Snowboards</h1>

        <p className='text-4xl mt-8 font-arial'>x</p>
      </div>

      <Carousel
        wrapAround={true}
        slidesToShow={2}
        autoplay={true}
        className='mt-20'
        defaultControlsConfig={{
          /* nextButtonText: '>',
          prevButtonText: '<', */
          prevButtonStyle: {
            display: 'none',
          },
          nextButtonStyle: {
            display: 'none',
          },
          pagingDotsStyle: { fill: 'none' },
        }}
      >
        {products?.map((product) => {
          return <DisplayItem key={product.name} details={product} />;
        })}
      </Carousel>
    </>
  );
};

export default Display;

Display.defaultProps = {
  products: [
    {
      name: '5150 Starlet 2010/2011',
      img_src: '/products/starlet.jpeg',
    },
    {
      name: '5150 Nomad 2010/2011',
      img_src: '/products/nomad.jpeg',
    },
    {
      name: '5150 Shooter 2010/2011',
      img_src: '/products/shooter.jpeg',
    },
    {
      name: '5150 Cypress 2010/2011',
      img_src: '/products/cypress.jpeg',
    },
    {
      name: '5150 Prism 2010/2011',
      img_src: '/products/prism.jpeg',
    },
    {
      name: '5150 Stroke 2010/2011',
      img_src: '/products/stroke.jpeg',
    },
    {
      name: '5150 Sienna 2010/2011',
      img_src: '/products/sienna.jpeg',
    },
  ],
};
