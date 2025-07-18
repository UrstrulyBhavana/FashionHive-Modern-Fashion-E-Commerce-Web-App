import React from 'react';
import { Link } from 'react-router-dom';
import { RatingStar } from 'rating-star';
import img from '../../assets/img/common/empty-cart.png';
import { useDispatch, useSelector } from 'react-redux';

const Compare = () => {
  const products = useSelector((state) => state.products.compare);
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch({ type: 'products/addToCart', payload: { id } });
    dispatch({ type: 'products/delCompare', payload: { id } });
  };

  const delCompare = (id) => {
    dispatch({ type: 'products/delCompare', payload: { id } });
  };

  return (
    <>
      {products.length ? (
        <section id="compare_area" className="ptb-100">
          <div className="container">
            <div className="compare-table-wrapper">
              <table className="compare-table">
                <tbody>
                  <tr>
                    <th>Product</th>
                    {products.map((item, index) => (
                      <td key={index}>
                        <Link to={`/product-details-one/${item.id}`}>
                          <img src={item.img} alt={item.title} className="compare-img" />
                        </Link>
                        <div className="compare-title">{item.title}</div>
                        <div className="compare-category">{item.category}</div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>Description</th>
                    {products.map((item, index) => (
                      <td key={index}>{item.description}</td>
                    ))}
                  </tr>
                  <tr>
                    <th>Price</th>
                    {products.map((item, index) => (
                      <td key={index}>${item.price}</td>
                    ))}
                  </tr>
                  <tr>
                    <th>Stock</th>
                    {products.map((item, index) => (
                      <td key={index}>{['In Stock', 'Coming Soon', 'Sold Out'][index]}</td>
                    ))}
                  </tr>
                  <tr>
                    <th>Add to Cart</th>
                    {products.map((item, index) => (
                      <td key={index}>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="compare-btn"
                        >
                          Add to Cart
                        </button>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>Rating</th>
                    {products.map((item, index) => (
                      <td key={index}>
                        <RatingStar maxScore={5} rating={item.rating.rate} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>Delete</th>
                    {products.map((item, index) => (
                      <td key={index}>
                        <button
                          onClick={() => delCompare(item.id)}
                          className="compare-delete"
                        >
                        <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section> 
      ) : (
        <section id="empty_cart_area" className="ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <img src={img} alt="Empty" className="img-fluid" />
                <h2  className="mt-4" style={{ fontWeight: '700', color: '#333'}}>Your compare list is empty</h2>
                <p className="text-muted mt-3">Go explore and add styles you love!</p>
                  <Link
                    to="/shop"
                    className="theme-btn-one btn-black-overlay btn_md mt-3"
                  >
                    Continue Shopping
                  </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Compare;
