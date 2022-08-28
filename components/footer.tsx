import gsap from 'gsap';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.set(footerRef.current, { scale: 0.9, opacity: 0 });
    gsap.to(footerRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: footerRef.current,
        // start: 'top = 0px',
        toggleActions: 'play none none none',
      },
    });
  }, []);
  return (
    <div
      ref={footerRef}
      className='bg-black min-h-60 mt-60 text-white flex flex-row flex-wrap w-full justify-evenly py-16 px-8 gap-y-4 font-poppins'
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
              className='bg-transparent focus:outline-none p-3 border border-green-400 w-auto md:w-60'
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
  );
};

export default Footer;
