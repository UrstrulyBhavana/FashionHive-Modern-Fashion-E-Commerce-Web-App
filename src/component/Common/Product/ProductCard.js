import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineExpand } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import MyVerticallyCenteredModal from '../../Common/Modal';

const ProductCard = (props) => {
    let dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);

    const addToCart = (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
    }

    const addToFav = (id) => {
        dispatch({ type: "products/addToFav", payload: { id } })
    }

    const addToComp = (id) => {
        dispatch({ type: "products/addToComp", payload: { id } })
    }

    return (
        <>
            <div className="product_wrappers_one">
                <div className="thumb">
                    <Link to={`/product-details-one/${props.data.id}`} className="image">
                        <img src={props.data.img} alt="Product" />
                        <img className="hover-image" src={props.data.hover_img}
                            alt="Product" />
                    </Link>

                    <div className="badge-wrapper-left">
                        <span className={`badge-style ${props.data.labels ? props.data.labels.replace(/[^a-zA-Z0-9]/g, '-') : ''}`}>
                            {props.data.labels || ''}
                        </span>
                    </div>

                    <div className="actions">
                        <a href="#!" className="action wishlist" title="Wishlist" onClick={() => addToFav(props.data.id)}><AiOutlineHeart /></a>
                        <a href="#!" className="action quickview" title="Quick view" onClick={() => setModalShow(true)}><AiOutlineExpand /></a>
                        <a href="#!" className="action compare" title="Compare" onClick={() => addToComp(props.data.id)}><FaExchangeAlt /></a>
                    </div>
                    <button type="button" className="add-to-cart offcanvas-toggle" onClick={() => addToCart(props.data.id)}>Add to cart</button>
                </div>

                <div className="content">
                    <h5 className="title">
                        <Link to={`/product-details-one/${props.data.id}`}>{props.data.title}</Link>
                    </h5>
                    <span className="price">
                        <span className="new">${props.data.price}.00</span>
                    </span>
                </div>
            </div>

            <MyVerticallyCenteredModal data={props.data} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default ProductCard