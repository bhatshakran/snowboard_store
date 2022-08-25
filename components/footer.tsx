import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black min-h-60 mt-60 text-white flex flex-row flex-wrap w-full justify-evenly py-16 px-4 font-poppins'>
      <div className='w-1/2 md:w-1/6'>
        <h2 className='text-xl text-red-400'>Products</h2>
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
        <h2 className='text-xl text-red-400'>About</h2>
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
        <h2 className='text-xl text-red-400'>Customers</h2>
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
        <ul className='footer_ul'>
          <li>
            <input
              type='text'
              name='email'
              id=''
              placeholder='someone@example.com'
              className='bg-transparent focus:outline-none p-3 border border-red-400 w-60'
            />
          </li>
          <li>
            <Link href='/'>Womens</Link>
          </li>
          <li>
            <Link href='/'>Youth</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
