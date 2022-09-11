import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartItem from '../components/cartItem';

const Cart = () => {
  const [cartItems, setCartItems] = React.useState<any>([]);

  React.useEffect(() => {
    if (localStorage.getItem('cart-items')) {
      const products = localStorage.getItem('cart-items');
      if (products) {
        JSON.parse(products).forEach((item: any, idx: number) => {
          setCartItems((prevState: any) => [...prevState, item]);
        });
      }
    }
  }, []);

  return (
    <div className='mt-12'>
      <div className='text-4xl text-center font-poppins'>
        <h2 className=''>Cart</h2>
        <p className='text-2xl mt-2'>X</p>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item: any, idx: number) => {
          return <CartItem info={item} key={idx} updateUi={setCartItems} />;
        })
      ) : (
        <div className='text-center mt-20 font-poppins font-bold'>
          <p>Uh oh! Nothing here.</p>
          <Image src='/assets/Oops.svg' height='100' width='100' alt='oops' />
        </div>
      )}

      {/* total */}

      {/* checkout */}
      {cartItems.length > 0 && (
        <div className='checkout mt-20 flex justify-center'>
          <button className='action_btns'>
            <Link href='/checkout'>
              <a className='font-poppins'>Proceed to Checkout</a>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
