import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import { DocLink, DocLinks } from '../types';
import gsap from 'gsap';

const HomeNav: NextPage<DocLinks> = ({ links }) => {
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 2, ease: 'smooth' },
    });
    if (timeline) {
      timeline.fromTo(
        navRef.current,
        { y: '-50', opacity: 0, autoAlpha: 1 },
        { y: 0, opacity: 1 }
      );
    }
  }, []);

  return (
    <div ref={navRef} className='nav'>
      <div className='bg-red-400 h-12 w-full flex justify-between'>
        <div className='flex items-center justify-evenly  w-3/5 max-w-lg h-full '>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
          {links &&
            links.map((link: DocLink) => (
              <div className='px-2' key={link.name}>
                <Link href={link.link}>
                  <a className='text-white'>{link.name}</a>
                </Link>
              </div>
            ))}
        </div>

        <div className='flex items-center justify-end w-2/5 h-full text-white'>
          <div className=' mx-2'>
            <Link href='/'>
              <a>search</a>
            </Link>
          </div>

          <div className='mr-4 ml-2'>
            <Link href='/account'>
              <a>account</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// HomeNav.displayName = ' HomeNav ';
HomeNav.defaultProps = {
  links: [
    { name: 'shop', link: '/shop' },
    { name: 'contact', link: '/contact' },
    { name: 'events', link: '/events' },
  ],
};

export default HomeNav;
