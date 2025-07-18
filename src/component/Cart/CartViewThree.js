import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Coupon from "./Coupon";
import TotalCart from "./TotalCart";
import EmptyCart from "./EmptyCart";

const CartViewThree = () => {

    const dispatch = useDispatch();
    const carts = useSelector((state) => state.products.carts);
    const [discount, setDiscount] = useState(0); 

    const rmProduct = (id) => {
        dispatch({ type: "products/removeCart", payload: { id } });
    };

    const clearCarts = () => {
        dispatch({ type: "products/clearCart" });
    };

    const cartValUpdate = (val, id) => {
        dispatch({ type: "products/updateCart", payload: { val, id } });
    };

  const increment = (item) => {
    cartValUpdate((item.quantity || 1) + 1, item.id);
  };

  const decrement = (item) => {
    if ((item.quantity || 1) > 1) {
      cartValUpdate((item.quantity || 1) - 1, item.id);
    }
  };

   const subtotal = carts.reduce(
    (sum, item) => sum + (item.price * (item.quantity || 1)),
    0
  );

  const total = (subtotal - subtotal * discount).toFixed(2);

  if (!carts.length) {
    return <EmptyCart />;
  }

 return (
    <section id="cart_area_three" className="ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="table_desc">
              <div className="table_page table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Remove</th>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <i
                            className="fa fa-trash text-danger"
                            title="Remove"
                            style={{ cursor: "pointer" }}
                            onClick={() => rmProduct(item.id)}
                          ></i>
                        </td>
                        <td>
                          <Link to={`/product-details-one/${item.id}`}>
                            <img
                              src={item.img}
                              alt={item.title}
                              style={{ width: "60px" }}
                            />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/product-details-one/${item.id}`}>
                            {item.title}
                          </Link>
                        </td>
                        <td>${item.price}.00</td>
                        <td>
                          <div className="quantity-controls">
                            <button
                              className="qty-btn"
                              onClick={() => decrement(item)}
                              disabled={(item.quantity || 1) <= 1}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity || 1}
                              onChange={(e) =>
                                cartValUpdate(
                                  Math.max(1, parseInt(e.target.value) || 1),
                                  item.id
                                )
                              }
                            />
                            <button
                              className="qty-btn"
                              onClick={() => increment(item)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="cart_submit mt-3">
                <button
                  className="theme-btn-one btn-black-overlay btn_sm"
                  type="button"
                  onClick={clearCarts}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
                 <div className="col-lg-4 col-md-12">
                     <div className="cart-sidebar">
                         <Coupon onApplyCoupon={(d) => setDiscount(d)} />
                         <TotalCart subtotal={subtotal} discount={discount} total={total} />
                     </div>
                 </div>

        </div>
      </div>
    </section>
  );
};

export default CartViewThree;
