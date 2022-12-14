import gsap from 'gsap';
import Link from 'next/link';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react';

const Footer = () => {
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(footerRef.current, { scale: 0.9, opacity: 0 });
    gsap.to(footerRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: footerRef.current,
        toggleActions: 'play none none none',
      },
    });
  }, []);
  return (
    <div className='w-full flex justify-center bg-black mt-60'>
      <div
        ref={footerRef}
        className=' min-h-60  text-white flex flex-row flex-wrap w-full justify-evenly py-16 px-8 gap-y-4 font-poppins max-w-6xl'
      >
        <div className='w-1/2 md:w-1/6'>
          <h2 className='text-xl text-green-400'>Products</h2>
          <ul className='footer_ul'>
            <li>
              <Link href='/'>Mens</Link>
            </li>
            <li>
              <Link href='/'>Womens</Link>
            </li>
            <li>
              <Link href='/'>Youth</Link>
            </li>
          </ul>
        </div>
        <div className='w-1/2 md:w-1/6'>
          <h2 className='text-xl text-green-400'>About</h2>
          <ul className='footer_ul'>
            <li>
              <Link href='/'>Careers</Link>
            </li>
            <li>
              <Link href='/'>Sponsorships</Link>
            </li>
            <li>
              <Link href='/'>Team</Link>
            </li>
            <li>
              <Link href='/'>Catalogue Request</Link>
            </li>
          </ul>
        </div>
        <div className='w-1/2 md:w-1/6'>
          <h2 className='text-xl text-green-400'>Customers</h2>
          <ul className='footer_ul'>
            <li>
              <Link href='/'>Contact us</Link>
            </li>
            <li>
              <Link href='/'>Shipping and order tracking</Link>
            </li>
            <li>
              <Link href='/'>Easy returns</Link>
            </li>
            <li>
              <Link href='/'>Warranty</Link>
            </li>
          </ul>
        </div>
        <div className='w-1/2 md:w-2/6'>
          <h2 className='text-xl text-green-400'>Newsletter</h2>

          <ul className='footer_ul'>
            <li>
              <input
                type='text'
                name='email'
                id=''
                placeholder='someone@example.com'
                className='bg-transparent focus:outline-none p-3 border border-green-400 w-40 md:w-60'
              />
            </li>
            <li>
              <Link href='/'>Facebook</Link>
            </li>
            <li>
              <Link href='/'>Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
