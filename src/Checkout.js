import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state.cartItems || [];
  const navigate = useNavigate();

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const priceWithoutSymbol = item.price.replace('$', '');
      const parsedPrice = parseFloat(priceWithoutSymbol);
      return total + parsedPrice * item.quantity;
    }, 0);

    return totalPrice.toFixed(2);
  };

  const handlePayNow = () => {
    // Gather form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postalCode').value;
    const province = document.getElementById('province').value;
    const country = document.getElementById('country').value;
    const creditCardNumber = document.getElementById('creditCardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvvCode = document.getElementById('cvvCode').value;

    // Prepare data for confirmation page
    const checkoutData = {
      fullName,
      email,
      address,
      city,
      postalCode,
      province,
      country,
      creditCardNumber,
      expiryDate,
      cvvCode,
      totalPrice: getTotalPrice(),
    };

    // Navigate to confirmation page
    navigate('/confirm', { state: {checkoutData} });
  };



  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <NavigationBar />
      <div className="flex-grow-1 container">
        <h2 className="text-white text-center mb-4 pt-3">Checkout</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Customer Information</h3>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Enter your address" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="Enter your city" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" className="form-control" id="postalCode" placeholder="Enter your postal code" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="province">Province</label>
              <input type="text" className="form-control" id="province" placeholder="Enter your province" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" className="form-control" id="country" placeholder="Enter your country" />
            </div>
          </div>
          <div className="col-md-6">
            <h3>Payment Information</h3>
            <div className="form-group">
              <label htmlFor="creditCardNumber">Credit Card Number</label>
              <input type="text" className="form-control" id="creditCardNumber" placeholder="Enter your credit card number" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cvvCode">CVV Code</label>
                <input type="text" className="form-control" id="cvvCode" placeholder="Enter CVV code" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Total Cost: ${getTotalPrice()}</h4>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 text-center">
            <button className="btn btn-success btn-lg" onClick={handlePayNow}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;