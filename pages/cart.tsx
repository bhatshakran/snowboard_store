import React from 'react';
import CartItem from '../components/cartItem';

const Cart = () => {
  const [cartItems, setCartItems] = React.useState<any>([]);

  React.useEffect(() => {
    if (localStorage.getItem('cart-items')) {
      const products = localStorage.getItem('cart-items');
      if (products) {
        JSON.parse(products).forEach((item: any) => {
          setCartItems((prevState: any) => [...prevState, item]);
        });
      }
    }
  }, []);

  return (
    <div className='mt-12'>
      <div className='text-6xl text-center font-poppins'>
        <h2>Cart</h2>
        <p className='text-4xl mt-6'>X</p>
      </div>
      {cartItems.map((item: any, idx: number) => {
        return <CartItem info={item} key={idx} updateUi={setCartItems} />;
      })}
    </div>
  );
};

export default Cart;
