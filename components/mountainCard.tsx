import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import StarIcon from '@mui/icons-material/Star';

const MountainCard = () => {
  const cardClasses = `flex flex-col items-center  gap-4 w-full md:w-1/3 md:border-r px-4`;
  const cardFlexContainerClasses = `flex flex-col md:flex-row max-w-sm  md:max-w-4xl gap-y-12 md:gap-4 justify-center text-left mt-32`;
  const wrapperClasses = ` mt-40 mb-44 flex flex-col items-center justify-center overflow-hidden w-full`;
  const iconClasses = `text-green-500`;
  const h3Classes = `text-xl font-poppins font-bold`;
  const pClasses = `font-poppins font-light`;

  return (
    <div className={wrapperClasses}>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-5xl font-bold font-poppins '>Features</h2>
        <p className='text-4xl font-arial'>x</p>
      </div>
      <div className={cardFlexContainerClasses}>
        <div className={cardClasses}>
          <LocalShippingIcon className={iconClasses} />
          <h3 className={h3Classes}>Free shipping</h3>
          <p className={pClasses}>
            Order anything above 30$ and get free shipping on our products.
          </p>
        </div>
        <div className={cardClasses}>
          <KeyboardReturnIcon className={iconClasses} />
          <h3 className={h3Classes}>30 Day Return </h3>
          <p className={pClasses}>
            When returning the items, we do a refund of the order.You can also
            exchange the order with different item.
          </p>
        </div>
        <div className={`${cardClasses} border-none`}>
          <StarIcon className={iconClasses} />
          <h3 className={h3Classes}>Best Quality</h3>
          <p className={pClasses}>
            We only sell items from renowed and top quality brands.We also
            ensure quality packing and shipping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MountainCard;
