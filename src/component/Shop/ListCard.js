import React, {useState} from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineExpand } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MyVerticallyCenteredModal from '../Common/Modal';
import { useDispatch } from "react-redux";

const ListCard = (props) => {
    
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
            <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                <div className="product_wrappers_list">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="thumb">
                                <Link to={ `/product-details-one/${props.data.id}`} className="image">
                                    <img src={props.data.img} alt="Product" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="content">
                                <div className="product_para_top">
                                    <h4 className="title"><Link to={ `/product-details-one/${props.data.id}`}>{props.data.title}</Link></h4>
                                    <p>{props.data.description}</p>
                                    <span className="price">
                                        <span className="new">${props.data.price}. 00</span>
                                    </span>
                                </div>
                                <div className="actions">
                                    <a href="#!" className="action wishlist" title="Wishlist"  onClick={() => addToFav(props.data.id)}><AiOutlineHeart/></a>
                                    <a href="#!" className="action quickview" data-link-action="quickview"
                                        title="Quick view" data-toggle="modal" data-target="#exampleModalCenter"  onClick={() => setModalShow(true)}><AiOutlineExpand/></a>
                                    <a href="#!" className="action compare" title="Compare" onClick={() => addToComp(props.data.id)}><FaExchangeAlt/></a>
                                </div>
                                <a href="#!" className="add-to-cart offcanvas-toggle btn btn_sm theme-btn-one btn-black-overlay" onClick={() => addToCart(props.data.id)}>Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MyVerticallyCenteredModal data={props.data} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default ListCard
