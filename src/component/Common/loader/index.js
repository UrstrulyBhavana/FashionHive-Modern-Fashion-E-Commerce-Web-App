import React from 'react';
import Lottie from 'lottie-react';
import cartLoader from '../../../assets/animations/cart-loader.json';

const Loader = () => {
  return (
    <div className="loader_wrapper">
      <div className="lottie-container">
        <Lottie animationData={cartLoader} loop />
      </div>
      <h2>Getting Things Ready…</h2>
      <p>Please wait while we load your experience.</p>
    </div>
  );
};

export default Loader;
