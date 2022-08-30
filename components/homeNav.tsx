import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import { DocLink, DocLinks } from '../types';
import gsap from 'gsap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { getCurrentBreakpoint } from '../utils/hooks/getCurrentBreakpoint';

const HomeNav: NextPage<DocLinks> = ({ links }) => {
  const navRef = React.useRef<HTMLDivElement>(null);
  const [navLinks, setShowNavLinks] = React.useState<boolean>(false);

  //  if screen size is greater than sm then set navlinks to false
  const setNavFlex = () => {
    const screenSize = getCurrentBreakpoint();
    if (screenSize !== 'undefined') {
      setShowNavLinks(false);
    } else setShowNavLinks(true);
  };

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

    window.addEventListener('resize', setNavFlex);

    return () => window.removeEventListener('resize', setNavFlex);
  }, []);

  const showNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowNavLinks(!navLinks);
  };

  return (
    <div ref={navRef} className='nav'>
      <div className=' bg-green-400 h-auto w-full flex  sm:flex-row flex-wrap  items-center'>
        <div className='flex items-center justify-start  w-1/2 sm:w-auto h-full '>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        {/* toggle button here */}
        <button
          className=' sm:hidden w-1/2 text-right flex justify-end pr-4'
          onClick={(e) => showNav(e)}
        >
          <GiHamburgerMenu className='text-white' />
        </button>

        {/* rest of the links start here */}
        <div
          className={`
          ${
            navLinks
              ? 'flex flex-col py-12 capitalize gap-y-4 w-full justify-center items-center text-xl bg-green-600'
              : 'hidden sm:flex  items-center justify-end w-2/5 h-full text-white'
          }   
          `}
        >
          {links &&
            links.map((link: DocLink) => (
              <div className='px-2' key={link.name}>
                <Link href={link.link}>
                  <a className='text-white'>{link.name}</a>
                </Link>
              </div>
            ))}
        </div>

        <div
          className={`
          ${
            navLinks
              ? 'flex flex-col  gap-y-4 capitalize w-full justify-center items-center text-xl bg-green-600'
              : 'hidden sm:flex flex- items-center justify-end w-2/5 h-full'
          }   
          `}
        >
          <div className=' mx-2 text-white'>
            <Link href='/'>
              <a>search</a>
            </Link>
          </div>

          <div className='mr-4 ml-2 text-white'>
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
