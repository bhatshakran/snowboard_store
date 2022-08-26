import gsap from 'gsap';
import Image from 'next/image';
import React, { FC } from 'react';

interface Hero {
  hero: { title: string; body: string };
}

const Hero: FC<Hero> = ({ hero }: Hero) => {
  const txtRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 2 } });
    if (timeline) {
      timeline.fromTo(
        imgRef.current,
        { x: '-100%', opacity: 0 },
        { x: 0, opacity: 1, delay: '0.3', ease: 'smooth' }
      );
      timeline.fromTo(
        txtRef.current,
        { x: '-100%', opacity: 0 },
        { x: 0, opacity: 1, ease: 'smooth' },
        '<+0.1'
      );
    }
  }, []);

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
};

export default Hero;
