import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const TotalCart = ({ subtotal, discount, total }) => (
  <div className="coupon_code right">
    <h3>Cart Summary</h3>
    <div className="coupon_inner">
      <div className="cart_subtotal">
        <p>Subtotal</p>
        <p>{formatCurrency(subtotal)}</p>
      </div>

      <div className="cart_subtotal">
        <p>Discount</p>
        <p>-{formatCurrency(subtotal * discount)}</p>
      </div>
        
        {/* {discount > 0 && (
        <div className="cart_subtotal">
            <p>Discount</p>
            <p>-{formatCurrency(subtotal * discount)}</p>
        </div>
        )} */}

      <div className="cart_subtotal">
        <p>Shipping</p>
        <p>{formatCurrency(0)}</p>
      </div>

      <div className="cart_subtotal">
        <p>
          <strong>Total</strong>
        </p>
        <p>
          <strong>{formatCurrency(total)}</strong>
        </p>
      </div>

      <div className="checkout_btn mt-3">
        <Link
          to="/checkout-one"
          className="theme-btn-one btn-black-overlay btn_sm"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  </div>
);

TotalCart.propTypes = {
  subtotal: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

TotalCart.defaultProps = {
  subtotal: 0,
  discount: 0,
  total: 0,
};

export default TotalCart;

