import Image from 'next/image';
import React, { FC } from 'react';

interface FeaturesType {
  customersSay?: { img: string; userName: string; text: string }[];
}

const WhatOthersSay: FC<FeaturesType> = ({ customersSay }) => {
  return (
    <div className='text-black w-full flex justify-center'>
      <div className='max-w-6xl'>
        <div className='text-center'>
          <h1 className='text-5xl font-poppins font-bold'>
            What Our Customers Say
          </h1>
          <p className='text-4xl mt-8'>x</p>
        </div>
        <div className=' flex my-12 mx-4 sm:mx-16 justify-center gap-x-4 gap-y-6'>
          {customersSay &&
            customersSay.map((item: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className='px-3 flex flex-col items-center gap-3'
                >
                  <Image
                    src={item.img}
                    alt='avatar'
                    width={90}
                    height={90}
                    className='rounded-full'
                  />
                  <h2 className='font-poppins font-bold text-xl'>
                    {item.userName}
                  </h2>
                  <h3 className='font-poppins'>{item.text}</h3>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
WhatOthersSay.defaultProps = {
  customersSay: [
    {
      img: '/assets/user1.jpeg',
      userName: 'John B',
      text: 'I brought skiing supplies from snowboard store and they are the best. They provide world class ski boards with warranty and 30 days return back if you get a faulty item.',
    },
    {
      img: '/assets/user2.jpeg',
      userName: 'Anna Koff',

      text: 'I have been skiing for a decade now and i have tried supplies from different stores across the globe but to be honest Snowboard store has got the best supplies. They give the best discounts and also deliver the products in a very short span of time.',
    },
    {
      img: '/assets/user3.jpeg',
      userName: 'Raj Yadav',

      text: 'No fake products. Only authentic and genuine products with warranty cards. Totally love this shop.',
    },
  ],
};
export default WhatOthersSay;
