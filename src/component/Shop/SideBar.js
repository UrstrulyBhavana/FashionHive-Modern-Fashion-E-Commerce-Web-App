import React, { useState } from 'react';
import search from '../../assets/img/svg/search.svg';

const SideBar = ({ filterEvent }) => {
  const [price, setPrice] = useState(100);

  const handleChange = () => {
    filterEvent(1);
  };

  return (
    <>
      <div className="col-lg-3">
        <div className="shop_sidebar_wrapper">
          <div className="shop_Search">
            <form>
              <input type="text" className="form-control" placeholder="Search..." onKeyUp={handleChange} />
              <button><img src={search} alt="img" /></button>
            </form>
          </div>

          <div className="shop_sidebar_boxed">
            <h4>Product Categories</h4>
            <form>
              {['ALL', 'T-shirts', 'Fashion', 'Bags', 'Jackets', 'Shoes', 'Jeans'].map((cat, i) => (
                <label className="custom_boxed" key={i}>{cat}
                  <input type="radio" name="category" onChange={handleChange} />
                  <span className="checkmark"></span>
                </label>
              ))}
            </form>
          </div>

          <div className="shop_sidebar_boxed">
            <h4>Price</h4>
            <div className="price_filter">
              <input
                type="range"
                min="10"
                max="200"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  handleChange();
                }}
              />
              <div className="price_slider_amount mt-2">
                <span>Price : {price}</span>
              </div>
            </div>
          </div>

          <div className="shop_sidebar_boxed">
            <h4>Color</h4>
            <div className="product-variable-color">
              {[1,2,3,4,5,6].map((id, i) => (
                <label key={i} htmlFor={`color-${id}`}>
                  <input type="radio" name="color" id={`color-${id}`} onChange={handleChange} />
                  <span className={`product-color-${['red','tomato','green','light-green','blue','light-blue'][i]}`}></span>
                </label>
              ))}
            </div>
          </div>

          <div className="shop_sidebar_boxed">
            <h4>Size</h4>
            <form>
              {['XS', 'S', 'M', 'L', 'XL'].map((size, i) => (
                <label className="custom_boxed" key={i}>{size}
                  <input type="radio" name="size" onChange={handleChange} />
                  <span className="checkmark"></span>
                </label>
              ))}
            </form>
          </div>

          <div className="shop_sidebar_boxed">
            <h4>Brand</h4>
            <form>
              {['Next', 'Adidas', 'Calvin Klein', 'Nike', 'Geox', 'River Island'].map((brand, i) => (
                <label className="custom_boxed" key={i}>{brand}
                  <input type="radio" name="brand" onChange={handleChange} />
                  <span className="checkmark"></span>
                </label>
              ))}
              <div className="clear_button">
                <button type="button" onClick={handleChange} className="theme-btn-one btn_sm btn-black-overlay">
                  Clear Filter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
