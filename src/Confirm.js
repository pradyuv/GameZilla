import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkoutData } = location.state;

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <NavigationBar />
      <div className="flex-grow-1 container">
        <h1 className="text-center text-success mt-4 mb-5">Thank you for your purchase!</h1>
        <div className="card">
          <div className="card-body">
            <h3>Order Details:</h3>
            <p><strong>Full Name:</strong> {checkoutData.fullName}</p>
            <p><strong>Email:</strong> {checkoutData.email}</p>
            <p><strong>Address:</strong> {checkoutData.address}</p>
            <p><strong>City:</strong> {checkoutData.city}</p>
            <p><strong>Postal Code:</strong> {checkoutData.postalCode}</p>
            <p><strong>Province:</strong> {checkoutData.province}</p>
            <p><strong>Country:</strong> {checkoutData.country}</p>
            <p><strong>Credit Card Number:</strong> {checkoutData.creditCardNumber}</p>
            <p><strong>Expiry Date:</strong> {checkoutData.expiryDate}</p>
            <p><strong>CVV Code:</strong> {checkoutData.cvvCode}</p>
            <p><strong>Total Cost:</strong> ${checkoutData.totalPrice}</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleReturnHome}>Return to Home</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirm;
