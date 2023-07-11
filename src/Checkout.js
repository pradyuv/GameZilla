import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state.cartItems || [];
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const priceWithoutSymbol = item.price.replace('$', '');
      const parsedPrice = parseFloat(priceWithoutSymbol);
      return total + parsedPrice * item.quantity;
    }, 0);

    return totalPrice.toFixed(2);
  };

  const validateForm = () => {
    const errors = {};

    // Validate full name
    const fullNameInput = document.getElementById('fullName');
    if (fullNameInput.value.trim() === '') {
      errors.fullName = 'Please enter your full name';
    }

    // Validate email
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate address
    const addressInput = document.getElementById('address');
    if (addressInput.value.trim() === '') {
      errors.address = 'Please enter your address';
    }

    // Validate city
    const cityInput = document.getElementById('city');
    if (cityInput.value.trim() === '') {
      errors.city = 'Please enter your city';
    }

    // Validate postal code
    const postalCodeInput = document.getElementById('postalCode');
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!postalCodeRegex.test(postalCodeInput.value)) {
      errors.postalCode = 'Please enter a valid postal code';
    }

    // Validate province
    const provinceInput = document.getElementById('province');
    if (provinceInput.value.trim() === '') {
      errors.province = 'Please enter your province';
    }

    // Validate country
    const countryInput = document.getElementById('country');
    if (countryInput.value.trim() === '') {
      errors.country = 'Please enter your country';
    }

    // Validate credit card number
    const creditCardNumberInput = document.getElementById('creditCardNumber');
    const creditCardNumberRegex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    if (!creditCardNumberRegex.test(creditCardNumberInput.value)) {
      errors.creditCardNumber = 'Please enter a valid credit card number';
    }

    // Validate expiry date
    const expiryDateInput = document.getElementById('expiryDate');
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDateInput.value)) {
      errors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
    }

    // Validate CVV code
    const cvvCodeInput = document.getElementById('cvvCode');
    const cvvCodeRegex = /^\d{3}$/;
    if (!cvvCodeRegex.test(cvvCodeInput.value)) {
      errors.cvvCode = 'Please enter a valid CVV code';
    }

    // Set the errors state
    setErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handlePayNow = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
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

      // Remove cartItems from local storage
      localStorage.removeItem('cartItems');

      // Navigate to confirmation page
      navigate('/confirm', { state: { checkoutData, cartItems } });
    }
  };

  const renderError = (field) => {
    if (errors[field]) {
      return <div className="text-danger">{errors[field]}</div>;
    }
    return null;
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
              {renderError('fullName')}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              {renderError('email')}
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Enter your address" />
              {renderError('address')}
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="Enter your city" />
                {renderError('city')}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" className="form-control" id="postalCode" placeholder="Enter your postal code" />
                {renderError('postalCode')}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="province">Province</label>
              <input type="text" className="form-control" id="province" placeholder="Enter your province" />
              {renderError('province')}
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" className="form-control" id="country" placeholder="Enter your country" />
              {renderError('country')}
            </div>
          </div>
          <div className="col-md-6">
            <h3>Payment Information</h3>
            <div className="form-group">
              <label htmlFor="creditCardNumber">Credit Card Number</label>
              <input type="text" className="form-control" id="creditCardNumber" placeholder="Enter your credit card number" />
              {renderError('creditCardNumber')}
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
                {renderError('expiryDate')}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cvvCode">CVV Code</label>
                <input type="text" className="form-control" id="cvvCode" placeholder="Enter CVV code" />
                {renderError('cvvCode')}
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
