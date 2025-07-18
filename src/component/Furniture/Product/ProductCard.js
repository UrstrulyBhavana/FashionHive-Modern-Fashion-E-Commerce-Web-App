import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MyVerticallyCenteredModal from '../../Common/Modal';
import { RatingStar } from "rating-star";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
    let dispatch = useDispatch();
    
    const addToCart = async (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
    }

    
    const addToFav = async (id) => {
        dispatch({ type: "products/addToFav", payload: { id } })
    }

    
    const addToComp = async (id) => {
        dispatch({ type: "products/addToComp", payload: { id } })
    }
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="product_box text-center">
                <div className="product_img">
                    <Link to={`/product-details-one/${props.data.id}`}>
                        <img src={props.data.img} alt="furniture_img1" />
                    </Link>
                    <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                            <li><a href="#!" onClick={() => addToFav(props.data.id)} className="popup-ajax"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#!" onClick={() => setModalShow(true)} className="action quickview" title="Quick view"> <i className="fa fa-expand"></i></a></li>
                            <li><a href="#!" onClick={() => addToComp(props.data.id)}><i className="fa fa-exchange"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="product_info">
                    <h5 className="product_title"><Link to={`/product-details-one/${props.data.id}`}>{props.data.title}</Link></h5>
                    <div className="product_price">
                        <span className="price">${props.data.price}.00</span>
                        <del>${parseInt(props.data.price) + 17}.00</del>
                    </div>
                    <div className="rating_wrap">
                        <div className="rating">
                            <RatingStar maxScore={5} rating={props.data.rating.rate} id="rating-star-furniture" />
                        </div>
                        <span className="rating_num">({props.data.rating.count})</span>
                    </div>
                    <div className="add-to-cart">
                        <a href="#!" className="offcanvas-toggle  theme-btn-one bg-black btn_sm" onClick={() => addToCart(props.data.id)}>
                            <i className="fa fa-cart-arrow-down"></i>Add To Cart</a>
                    </div>
                </div>
            </div>

            <MyVerticallyCenteredModal data={props.data} show={modalShow} onHide={() => setModalShow(false)} />

        </>
    )
}

export default ProductCard
