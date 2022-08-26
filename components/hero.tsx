import Image from 'next/image';
import React, { FC, ForwardedRef, Ref, RefObject } from 'react';

interface Hero {
  hero: { title: string; body: string };
}
interface IncomingRef {
  txtRef: React.ForwardedRef<HTMLDivElement>;
  imgRef: React.ForwardedRef<HTMLDivElement>;
}
const Hero = React.forwardRef(({ hero }: Hero, ref: React.Ref<IncomingRef>) => {
  const { txtRef, imgRef } = ref?.current;
  return (
    <div className='hero_wrapper flex flex-col lg:flex-row items-center justify-center px-8 h-auto lg:h-2/3 text-center my-20 gap-y-4'>
      <div className='txt_section w-full lg:w-1/2 '>
        <div
          ref={txtRef}
          className='text-4xl sm:text-6xl font-poppins font-extrabold'
        >
          {hero.title}
        </div>
      </div>
      <div
        ref={imgRef}
        className='img_section w-full lg:w-1/2  flex justify-center'
      >
        <Image
          src='/snowboarder.jpg'
          alt='snowboarder'
          height={'400'}
          width={'500'}
        />
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
