import React, { FC } from 'react';
import DisplayItem from './displayItem';
import Carousel from 'nuka-carousel';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface ProductType {
  products?: { name: string; img_src: string }[];
}

const Display: FC<ProductType> = ({ products }) => {
  const displayRef = React.useRef<HTMLDivElement>(null);

  if (typeof window !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }

  React.useEffect(() => {
    gsap.set(displayRef.current, {
      // x: '100%',
      opacity: 0,
      scale: 0.2,
    });
    gsap.to(displayRef.current, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: displayRef.current,
        start: 'top += 100px',
        toggleActions: 'restart none none none',
      },
    });
    // }
  }, []);

  return (
    <div ref={displayRef}>
      <div className='mt-16 text-center  '>
        <h1 className='text-5xl font-bold font-poppins'>Snowboards</h1>

        <p className='text-4xl mt-8 font-arial'>x</p>
      </div>

      <Carousel
        wrapAround={true}
        slidesToShow={2}
        autoplay={false}
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
    </div>
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
