import Image from 'next/image';
import React, { FC } from 'react';

interface DetailsType {
  details: {
    name: string;
    img_src: string;
  };
}

const DisplayItem: FC<DetailsType> = ({ details }) => {
  return (
    <div className='flex flex-col items-center '>
      <div>
        <Image src={details.img_src} alt='card' width='200px' height='300px' />
      </div>
      <div className=' text-center mt-8'>
        <h4 className='font-poppins font-bold'>{details.name}</h4>
      </div>
    </div>
  );
};

export default DisplayItem;
