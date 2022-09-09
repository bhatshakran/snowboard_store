import Image from 'next/image';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const CartItem = ({ info, updateUi }: any) => {
  const cartitemRef = React.useRef<HTMLDivElement>(null);
  const decRef = React.useRef<HTMLDivElement>(null);
  const incRef = React.useRef<HTMLDivElement>(null);
  const numRef = React.useRef<HTMLInputElement>(null);
  const changeColor = () => {
    if (cartitemRef.current && numRef.current) {
      cartitemRef.current.style.background = '#E60000';
      numRef.current.style.background = '#E60000';
      cartitemRef.current.style.transition = '0.5s linear ';
      numRef.current.style.transition = '0.5s linear ';
      numRef.current.style.color = '#ffffff';
      cartitemRef.current.style.color = '#ffffff';
    }
  };
  const removeColor = () => {
    if (cartitemRef.current && numRef.current) {
      cartitemRef.current.style.background = 'none';
      numRef.current.style.color = 'black';
      numRef.current.style.background = '#ffffff';
      cartitemRef.current.style.color = 'black';
    }
  };

  const removeItemFromCart = () => {
    if (localStorage.getItem('cart-items')) {
      const products = localStorage.getItem('cart-items');
      if (products) {
        const cartItems = JSON.parse(products);
        const filteredCart = cartItems.filter((item: any) => {
          return item.name !== info.name;
        });
        localStorage.setItem('cart-items', JSON.stringify(filteredCart));
        updateUi(filteredCart);
      }
    }
  };

  const decreaseValue = () => {
    if (numRef.current) {
      let value = parseInt(numRef.current.value, 10);
      value = isNaN(value) ? 0 : value;
      value--;
      numRef.current.value = value.toString();
    }
  };
  const increaseValue = () => {
    if (numRef.current) {
      let value = parseInt(numRef.current.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      numRef.current.value = value.toString();
    }
  };

  return (
    <div
      ref={cartitemRef}
      className='flex gap-x-2 items-center border mt-12 mx-4 p-2 rounded-md'
    >
      <Image src={info.image} height='120' width='150' alt='cartitem' />
      <p className='font-poppins'>{info.name}</p>
      <button
        className='text-2xl  w-1/3'
        onMouseEnter={changeColor}
        onMouseLeave={removeColor}
        onClick={removeItemFromCart}
      >
        <AiFillDelete />
      </button>
      <div className='flex items-center justify-center'>
        <div
          ref={decRef}
          className='value_button w-4 cursor-pointer'
          id='decrease'
          onClick={decreaseValue}
        >
          -
        </div>
        <div className='w-6'>
          <input
            ref={numRef}
            type='number'
            id='number'
            defaultValue='0'
            className='w-full text-center bg-none'
          />
        </div>
        <div
          ref={incRef}
          className='value_button w-4 cursor-pointer'
          id='increase'
          onClick={increaseValue}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default CartItem;
