import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface DetailsType {
  details: {
    name: string;
    img_src: string;
  };
}

const DisplayItem: FC<DetailsType> = ({ details }) => {
  return (
    <div className='flex flex-col h-52 '>
      <div className='container relative border rounded-md h-40  mt-12 flex flex-col justify-end  '>
        <div className='absolute -top-16 left-1/2 -translate-x-1/2'>
          <Image
            src={details.img_src}
            alt='card'
            width='100px'
            height='150px'
          />
        </div>

        <div className=' text-center mt-8 px-4'>
          <h4 className='font-poppins font-bold'>{details.name}</h4>
          <div className=' text-green-500'>
            <Link href='/'>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
