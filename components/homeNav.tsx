import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import { DocLink, DocLinks } from '../types';

const HomeNav: NextPage<DocLinks> = ({ links, timeline }) => {
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (timeline) {
      timeline.fromTo(
        navRef.current,
        { y: '-50', visibility: 'visible' },
        { y: 0 }
      );
    }
  }, [timeline]);

  return (
    <div ref={navRef} className='nav'>
      <div className='bg-green-400 h-12 w-full flex justify-between'>
        <div className='flex items-center justify-evenly  w-3/5 max-w-lg h-full '>
          <Logo />
          {links &&
            links.map((link: DocLink) => (
              <div className='px-2' key={link.name}>
                <Link href={link.link}>
                  <a className='text-white'>{link.name}</a>
                </Link>
              </div>
            ))}
        </div>

        <div className='flex items-center justify-end w-2/5 h-full '>
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
