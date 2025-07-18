import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import emptyCartAnim from '../../assets/animations/empty-cart.json'; 

const EmptyCart = () => {
  return (
    <section id="empty_cart_area" >
      <div className="container">
        <div className="row">
         <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 col-12">
            <div className="empty_cart_area">
              <Lottie
                animationData={emptyCartAnim}
                loop
                style={{ height: '250px', margin: '0 auto' }}
              />
              <h2 className="mt-4">Your cart is feeling empty</h2>
              <p className="text-muted">Go explore and add styles you love!</p>
              <Link
                to="/shop"
                className="theme-btn-one btn-black-overlay btn_md mt-3"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
