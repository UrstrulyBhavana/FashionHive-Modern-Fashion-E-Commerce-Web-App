import React from "react";
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import img from '../../assets/img/common/empty-cart.png'

const Wishlist = () => {
    let dispatch = useDispatch();

    let favorites = useSelector((state) => state.products.favorites);

    const rmProduct = (id) => {
        dispatch({ type: "products/removeFav", payload: { id } });
    }

    
    const addToCart = async (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
        dispatch({ type: "products/removeFav", payload: { id } });
    }

    return (
        <>
            {favorites.length
                ?
                <section id="Wishlist_area" className="ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table_desc">
                                    <div className="table_page table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product_remove">Remove</th>
                                                    <th className="product_thumb">Image</th>
                                                    <th className="product_name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product_stock">Stock Status</th>
                                                    <th className="product_addcart">Add To Cart</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {favorites.map((data, index) => (
                                                    <tr key={index}>
                                                        <td className="product_remove">
                                                            <i className="fa fa-trash text-danger" onClick={() => rmProduct(data.id)} style={{ 'cursor': 'pointer' }}></i>
                                                        </td>
                                                        <td className="product_thumb">
                                                            <Link to={`/product-details-one/${data.id}`}>
                                                                <img src={data.img} alt="img" />
                                                            </Link>
                                                        </td>
                                                        <td className="product_name">
                                                            <Link to={`/product-details-one/${data.id}`}>
                                                                {data.title}
                                                            </Link>
                                                        </td>
                                                        <td className="product-price">${data.price}.00</td>
                                                        <td className="product_stock"><h6>In Stock</h6></td>
                                                        <td className="product_addcart">
                                                            <button type="button" className="theme-btn-one btn-black-overlay btn_sm" onClick={() => addToCart(data.id)}>Add to cart</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                : <section id="empty_cart_area" className="ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12">
                                <div className="empty_cart_area">
                                    <img src={img} alt="img" />
                                    <h2 className="mt-4" style={{ fontWeight: '700', color: '#333' }}>YOUR WISHLIST IS EMPTY</h2>
                                    <p className="text-muted mt-2">Go explore and add styles you love!</p>
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
            }
        </>
    )
}

export default Wishlist
