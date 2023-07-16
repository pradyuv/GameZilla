import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const checkoutData = location.state.checkoutData; // Access checkout data 
  const cartItems = location.state.cartItems; //Access cart items

  const handleReturnHome = () => {
    navigate('/');
  };

  console.log(cartItems);

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <NavigationBar />
      <div className="flex-grow-1 container">
        <h1 className="text-center text-success mt-4 mb-5">Thank you for your purchase!</h1>
        <img src='images/confirm.jpg' alt='confirmImage' style={{ width: '300px' }}/>
        <div className="card bg-info">
          <div className="card-body">
            <h3>Order Details:</h3>
            <p><strong>Full Name:</strong> {checkoutData.fullName}</p>
            <p><strong>Email:</strong> {checkoutData.email}</p>
            <p><strong>Address:</strong> {checkoutData.address}</p>
            <p><strong>City:</strong> {checkoutData.city}</p>
            <p><strong>Postal Code:</strong> {checkoutData.postalCode}</p>
            <p><strong>Province:</strong> {checkoutData.province}</p>
            <p><strong>Country:</strong> {checkoutData.country}</p>
            <p><strong>Total Cost:</strong> ${checkoutData.totalPrice}</p>
          </div>
        </div>
        <h3 className="mt-4">Games:</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="card mb-3 bg-dark text-white">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.imagePath} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleReturnHome}>Return to Home</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirm;
