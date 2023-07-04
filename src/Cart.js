import React, { useState, useEffect } from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

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
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <NavigationBar />
      <div className="flex-grow-1 container">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div>
              {cartItems.map((item, index) => (
                <div key={index}>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {parseFloat(item.price)}</p> {/* Display the item price directly */}
                  <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </div>
              ))}
            </div>
            <div>
              <h4>Total Quantity: {getTotalQuantity()}</h4>
              <h4>Total Price: {getTotalPrice()}</h4>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
