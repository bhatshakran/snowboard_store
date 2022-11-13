import gsap from 'gsap';
import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import StarIcon from '@mui/icons-material/Star';

const MountainCard = () => {
  // const overlayRef = React.useRef<HTMLDivElement>(null);

  /*  React.useEffect(() => {
    gsap.set(overlayRef.current, { y: '300', x: '300', opacity: 0 });
    gsap.to(overlayRef.current, {
      y: 0,
      x: 0,
      opacity: 1,
      duration: 3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: overlayRef.current,
        start: 'top += 100px',
        toggleActions: 'restart none none none',
      },
    });
  }, []) */ return (
    <div className='  mt-40 mb-44 flex justify-center overflow-hidden w-full'>
      <div className='flex max-w-4xl gap-4 justify-center text-left'>
        <div className='flex flex-col items-center  gap-4 w-1/3 border-r px-4'>
          <LocalShippingIcon className=' text-green-500' />
          <h3 className='text-xl font-poppins font-bold'>Free shipping</h3>
          <p className='font-poppins font-light'>
            Order anything above 30$ and get free shipping on our products.
          </p>
        </div>
        <div className='flex flex-col items-center  gap-4 w-1/3 border-r px-4'>
          <KeyboardReturnIcon className=' text-green-500' />
          <h3 className='text-xl font-poppins font-bold'>30 Day Return </h3>
          <p className='font-poppins font-light'>
            When returning the items, we do a refund of the order.You can also
            exchange the order with different item.
          </p>
        </div>
        <div className='flex flex-col items-center gap-4 w-1/3  px-4'>
          <StarIcon className=' text-green-500 ' />
          <h3 className='text-xl font-poppins font-bold'>Best Quality</h3>
          <p className='font-poppins font-light'>
            We only sell items from renowed and top quality brands.We also
            ensure quality packing and shipping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MountainCard;
