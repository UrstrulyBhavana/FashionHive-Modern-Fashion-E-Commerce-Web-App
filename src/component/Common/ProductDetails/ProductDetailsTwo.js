import ProductInfo from './ProductInfo'
import RelatedProduct from './RelatedProduct'
import { Link , useParams } from 'react-router-dom'
import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { RatingStar } from "rating-star";

const ProductDetailsTwo = () => {
    let dispatch = useDispatch();
    let { id } = useParams();
    dispatch({ type: "products/getProductById", payload: { id } });
    let product = useSelector((state) => state.products.single);

    const addToCart = async (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
    }

    const addToFav = async (id) => {
        dispatch({ type: "products/addToFav", payload: { id } })
    }

    const addToComp = async (id) => {
        dispatch({ type: "products/addToComp", payload: { id } })
    }
    const [count, setCount] = useState(1)
    const incNum = () => {
        setCount(count + 1)
    }
    const decNum = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert("Sorry, Zero Limit Reached")
            setCount(0)
        }
    }
    const [img, setImg] = useState(product.img)
    const colorSwatch = (i) => {
        let data = product.color.find(item => item.color === i)
        setImg(data.img)
    }

    let settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>{product
            ?
            <section id="product_single_two" className="ptb-100">
                <div className="container">
                    <div className="row area_boxed">
                        <div className="col-lg-4">
                            <div className="product_single_two_img slider-for">
                                <Slider {...settings}>
                                    <div className="product_img_two_slider">
                                        <img src={img} alt="img" />
                                    </div>
                                    <div className="product_img_two_slider">
                                        <img src={product.hover_img} alt="img" />
                                    </div>
                                    {
                                        product.color.map(item => (
                                            <div className="product_img_two_slider">
                                                <img src={item.img} alt="img" />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="product_details_right_one">
                                <div className="modal_product_content_one">
                                    <h3>{product.title}</h3>
                                    <div className="reviews_rating">
                                        <RatingStar maxScore={5} rating={product.rating.rate} id="rating-star-common-2" />
                                        <span>({product.rating.count} Customer Reviews)</span>
                                    </div>
                                    <h4>${product.price}.00 <del>${parseInt(product.price) + 17}.00</del> </h4>
                                    <p>{product.description}</p>
                                    <div className="customs_selects">
                                        <select name="product" className="customs_sel_box">
                                            <option value="">Size</option>
                                            <option value="small">S</option>
                                            <option value="medium">M</option>
                                            <option value="large">L</option>
                                            <option value="xl">XL</option>
                                        </select>
                                    </div>
                                    <div className="variable-single-item">
                                        <span>Color</span>
                                        <div className="product-variable-color">
                                            <label htmlFor="modal-product-color-red1">
                                                <input name="modal-product-color" id="modal-product-color-red1"
                                                    className="color-select" type="radio" onChange={() => { colorSwatch('red') }} defaultChecked/>
                                                <span className="product-color-red"></span>
                                            </label>
                                            <label htmlFor="modal-product-color-green3">
                                                <input name="modal-product-color" id="modal-product-color-green3"
                                                    className="color-select" type="radio" onChange={() => { colorSwatch('green') }} />
                                                <span className="product-color-green"></span>
                                            </label>
                                            <label htmlFor="modal-product-color-blue5">
                                                <input name="modal-product-color" id="modal-product-color-blue5"
                                                    className="color-select" type="radio" onChange={() => { colorSwatch('blue') }} />
                                                <span className="product-color-blue"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <form id="product_count_form_two">
                                        <div className="product_count_one">
                                            <div className="plus-minus-input">
                                                <div className="input-group-button">
                                                    <button type="button" className="button" onClick={decNum}>
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input className="form-control" type="number" value={count} readOnly />
                                                <div className="input-group-button">
                                                    <button type="button" className="button" onClick={incNum}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="links_Product_areas">
                                        <ul>
                                            <li>
                                                <a href="#!" className="action wishlist" title="Wishlist" onClick={() => addToFav(product.id)}><i
                                                    className="fa fa-heart"></i>Add To Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="#!" className="action compare" title="Compare" onClick={() => addToComp(product.id)}><i
                                                    className="fa fa-exchange"></i>Add To Compare</a>
                                            </li>
                                        </ul>
                                        <a href="#!" className="theme-btn-one btn-black-overlay btn_sm" onClick={() => addToCart(product.id)}>Add To Cart</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductInfo />
                </div>
            </section>
            :
            <div className="container ptb-100">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12">
                        <div className="empaty_cart_area">
                            <img src={img} alt="img" />
                            <h2>PRODUCT NOT FOUND</h2>
                            <h3>Sorry Mate... No Item Found according to Your query!</h3>
                            <Link to="/shop" className="btn btn-black-overlay btn_sm">Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        }
            <RelatedProduct />
        </>
    )
}

export default ProductDetailsTwo