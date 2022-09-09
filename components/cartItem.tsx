import Image from 'next/image';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const CartItem = ({ info, updateUi }: any) => {
  const { cartItem } = info;
  const cartitemRef = React.useRef<HTMLDivElement>(null);
  const changeColor = () => {
    if (cartitemRef.current) {
      cartitemRef.current.style.background = '#E60000';
      cartitemRef.current.style.transition = '0.5s linear ';
      cartitemRef.current.style.color = '#ffffff';
    }
  };
  const removeColor = () => {
    if (cartitemRef.current) {
      cartitemRef.current.style.background = 'none';
      cartitemRef.current.style.color = 'black';
    }
  };

  const removeItemFromCart = () => {
    if (localStorage.getItem('cart-items')) {
      const products = localStorage.getItem('cart-items');
      if (products) {
        const cartItems = JSON.parse(products);
        const filteredCart = cartItems.filter((item: any) => {
          // console.log(item);
          return item.cartItem.name !== cartItem.name;
        });

        console.log(filteredCart);
        localStorage.setItem('cart-items', JSON.stringify(filteredCart));
        updateUi(filteredCart);
      }
    }
  };

  return (
    <div
      ref={cartitemRef}
      className='flex gap-x-2 items-center border mt-12 mx-4 p-2 rounded-md'
    >
      <Image src={cartItem.image} height='120' width='150' alt='cartitem' />
      <p className='font-poppins'>{cartItem.name}</p>
      <button
        className='text-2xl  w-1/3'
        onMouseEnter={changeColor}
        onMouseLeave={removeColor}
        onClick={removeItemFromCart}
      >
        <AiFillDelete />
      </button>
    </div>
  );
};

export default CartItem;
