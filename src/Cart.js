import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const priceWithoutSymbol = item.price.replace('$', '');
      const parsedPrice = parseFloat(priceWithoutSymbol);
      return total + parsedPrice * item.quantity;
    }, 0);

    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <NavigationBar />
      <div className="flex-grow-1 container">
        <h2 className="text-white text-center mb-4 pt-3">Cart</h2>
        <img src='images/cart.jpg' alt='cartImage' style={{ width: '300px' }}/>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div>
              {cartItems.map((item, index) => (
                <div key={index}>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <img src={item.imagePath} alt={item.name} style={{ width: '100px' }} />
                  <p>Price: {item.price}</p>
                  <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </div>
              ))}
            </div>
            <div>
              <h4>Total Quantity: {getTotalQuantity()}</h4>
              <h4>Total Price: ${getTotalPrice()}</h4>
              <button onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
