import Image from 'next/image';
import React, { FC } from 'react';

interface FeaturesType {
  features?: { img: string; text: string }[];
}

const Features: FC<FeaturesType> = ({ features }) => {
  return (
    <div className='text-black '>
      <div className='text-center'>
        <h1 className='text-5xl font-poppins font-bold'>Features</h1>
        <p className='text-4xl mt-8'>x</p>
      </div>
      <div className='features_cards flex flex-wrap my-12 mx-4 sm:mx-16 justify-center gap-x-4 gap-y-6'>
        {features?.map((feature, idx) => {
          return (
            <div
              key={idx}
              className='w-56 sm:w-64 flex flex-col rounded-md bg-gray-200 gap-y-4 pb-4 cursor-pointer hover:opacity-90 hover:text-stone-800'
            >
              <Image
                src={feature.img}
                height='400'
                width='550'
                // objectFit='contain'
                alt='feature'
                className='rounded-md '
              />

              <h3 className='font-poppins font-bold text-center'>
                {feature.text}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
Features.defaultProps = {
  features: [
    { img: '/features/mountains.jpg', text: 'Something out of the blue' },
    {
      img: '/features/skicold.jpg',
      text: 'Adrenaline rush and the cold wind!',
    },
    { img: '/features/supplies.jpg', text: 'Top class skiing supplies' },
  ],
};
export default Features;
