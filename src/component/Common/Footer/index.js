import React, { useEffect } from 'react'
import logo from '../../../assets/img/logo.png'
import payment from '../../../assets/img/common/payment.png'
import { Link } from 'react-router-dom'
import NewsletterModal from '../NewsletterModal'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

const FooterData = [
    {
        title: "INFORMATION",
        links: [
            { linkTitle: "Home", link: "/" },
            { linkTitle: "About Us", link: "/about" },
            { linkTitle: "Privacy Policy", link: "/privacy-policy" },
            { linkTitle: "FAQs", link: "/faqs" },
            { linkTitle: "Track Order", link: "/order-tracking" },
            { linkTitle: "Compare", link: "/compare" }
        ]
    },
    {
        title: "SHOP",
        links: [
            { linkTitle: "Cart", link: "/cart" },
            { linkTitle: "Empty Cart", link: "/empty-cart" },
            { linkTitle: "Checkout", link: "/checkout-one" },
            { linkTitle: "Wishlist", link: "/wishlist" }
        ]
    }
]

const Footer = () => {

    let dispatch = useDispatch();

    let promoCenter = useSelector((state) => state.settings.promoCenter);
    let promoStatus = useSelector((state) => state.settings.promoStatus);
    let stopPromo = useSelector((state) => state.settings.stopPromo);
 
    useEffect(() => {
        if (promoStatus) {
            return
        } else {
            dispatch({ type: "settings/promoStatus" })
            setTimeout(function () {
                dispatch({ type: "settings/promoCenter" })
            }, 2000)
        }

         }, [dispatch, promoStatus]);


    const startPromoModal = () => {
        if (stopPromo) {
            dispatch({ type: "settings/promoCenter" })
            return;
        } else {
            dispatch({ type: "settings/promoCenter" })
            setTimeout(function () {
                dispatch({ type: "settings/promoCenter" })
            }, 700000)
        }

    }

    const stopPromoModal = () => {
        dispatch({ type: "settings/stopPromo" })
    }


    return (
        <>
            <footer id="footer_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="footer_left_side">
                                <Link to="/" >
                                 <img src={logo} alt="FashionHive Logo" />
                                </Link>
                                <p>
                                    <strong>FashionHive</strong>  is a trend-forward fashion hub dedicated to empowering personal style. Our collections include curated streetwear, modern ethnic fusion, and timeless classics — all designed to make you stand out.
                                </p>
                                <div className="footer_left_side_icon">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com"  target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com"  target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com"  target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(0, 1).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(1, 2).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="footer_one_widget">
                                <h3>NEWSLETTER</h3>
                                <div id="mc_embed_signup" className="subscribe-form">
                                    <form onSubmit={(e) => { e.preventDefault(); Swal.fire('Success', 'Thank you for your Subscription', 'success'); document.querySelector("input[type='email']").value = "" }}>
                                        <div className="mc-form">
                                            <input className="form-control" type="email" placeholder="Enter your email" name="EMAIL" defaultValue="" required />
                                            <div className="clear">
                                                <button className="theme-btn-one btn_md" type="submit" name="subscribe" defaultValue=""> Send Mail</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="go-top active" onClick={() => { window.scrollTo(0, 0) }}>
                    <i className="fa fa-chevron-up"></i>
                    <i className="fa fa-arrow-up"></i>
                </div>
            </footer>

            <section id="copyright_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_left">
                             <p>© {new Date().getFullYear()} FashionHive. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_right">
                                <img src={payment} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <NewsletterModal show={promoCenter} stop={stopPromoModal} start={startPromoModal} />
        </>
    )
}

export default Footer







