import React, { FC } from 'react';
import DisplayItem from './displayItem';
import Carousel from 'nuka-carousel';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface ProductType {
  products?: { name: string; img_src: string }[];
}

const Display: FC<ProductType> = ({ products }) => {
  // const displayRef = React.useRef<HTMLDivElement>(null);

  if (typeof window !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // React.useEffect(() => {
  //   gsap.set(displayRef.current, {
  //     // x: '100%',
  //     opacity: 0,
  //     scale: 0.2,
  //   });
  //   gsap.to(displayRef.current, {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 2,
  //     ease: 'power2.out',
  //     scrollTrigger: {
  //       trigger: displayRef.current,
  //       start: 'top += 100px',
  //       toggleActions: 'restart none none none',
  //     },
  //   });
  //   // }
  // }, []);

  return (
    <div className='w-full flex justify-center px-2 md:px-0'>
      <div className='flex flex-col gap-12 items-center justify-center max-w-6xl'>
        <div className='mt-16 text-center  '>
          <h1 className='text-5xl font-bold font-poppins'>Trending products</h1>

          <p className='text-4xl mt-8 font-arial'>x</p>
        </div>

        <div className='flex justify-center flex-wrap gap-6 gap-y-14'>
          {products?.map((product) => {
            return <DisplayItem key={product.name} details={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Display;

Display.defaultProps = {
  products: [
    {
      name: '5150 Starlet 2010/2011',
      img_src: '/products/starlet.webp',
    },
    {
      name: '5150 Nomad 2010/2011',
      img_src: '/products/nomad.webp',
    },
    {
      name: '5150 Shooter 2010/2011',
      img_src: '/products/shooter.webp',
    },
    {
      name: '5150 Cypress 2010/2011',
      img_src: '/products/cypress.webp',
    },
  ],
};
