import Image from 'next/image';
import React, { FC } from 'react';
import { ContentType } from '../types';

interface Hero {
  hero: { title: string; body: string };
}

const Hero: FC<Hero> = ({ hero }) => {
  return (
    <div className='hero_wrapper flex flex-col lg:flex-row items-center justify-center px-8 h-auto lg:h-2/3 text-center my-20 gap-y-4'>
      <div className='txt_section w-full lg:w-1/2 '>
        <div className='text-4xl sm:text-6xl font-poppins font-extrabold'>
          {hero.title}
        </div>
      </div>
      <div className='img_section w-full lg:w-1/2  flex justify-center'>
        <Image
          src='/snowboarder.jpg'
          alt='snowboarder'
          height={'400'}
          width={'500'}
        />
      </div>
    </div>
  );
};

export default Hero;
