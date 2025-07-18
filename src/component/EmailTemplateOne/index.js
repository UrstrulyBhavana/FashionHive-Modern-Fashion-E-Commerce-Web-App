import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import img1 from '../../assets/img/email/1.jpg'
import pro1 from '../../assets/img/email/pro-1.jpg'
import pro2 from '../../assets/img/email/pro-2.jpg'
import pro3 from '../../assets/img/email/pro-8.jpg'
import cosmetic from '../../assets/img/email/cosmetic.jpg'
import img2 from '../../assets/img/email/6.jpg'
import img3 from '../../assets/img/email/5.jpg'
import facebook from '../../assets/img/email/facebook.png'
import youtube from '../../assets/img/email/youtube.png'
import twitter from '../../assets/img/email/twitter.png'
import gplus from '../../assets/img/email/gplus.png'
import linkedin from '../../assets/img/email/linkedin.png'
import pinterest from '../../assets/img/email/pinterest.png'

const EmailTemplateOne = () => {
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    };

    return (
        <>
            <div className="email_template_one">
                <div className="back_btn_emial">
                    <button className="theme-btn-one btn-black-overlay btn_sm" onClick={routeChange}>
                        <i className="fa fa-arrow-left mr-2"></i>Go Back
                    </button>
                </div>
                
                <table align="center" border="0" cellPadding="0"
                    style={{ backgroundColor: "#fff", boxShadow: "0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353)" }}>
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr className="header">
                                            <td align="left" valign="top">
                                                <img src={logo} className="main-logo" alt="img"/>
                                            </td>
                                            <td align="right">
                                                <ul className="nav-links">
                                                    <li>
                                                        <Link className="nav-link" to="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="nav-link" to="/wishlist">Wishlist</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="nav-link" to="/cart">My Cart</Link>
                                                    </li>
                                                    <li>
                                                        <Link  className="nav-link" to="/contact-two">Contact</Link>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table align="center" border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td><img src={img1} alt="img" className='email-banner-img'/></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4 className="title">🔥 Additional 50% Off</h4>
                                <h5>On Fashion for Kids, Women & Men</h5>

                                <table align="center" border="0" cellPadding="0" width="100%"
                                    style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro1} alt="product" className='pro1'/>
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!">
                                                            <h6 className='text-center'>Blush Pink Mini Dress</h6>
                                                        </a>
                                                        <h4 className='text-center '>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro2} alt="product" className='pro2' />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!">
                                                            <h6 className='text-center'>Denim Chic Button-Down</h6>
                                                        </a>
                                                        <h4 className='text-center'>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro3} alt="product" className='pro3' />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!">
                                                            <h6 className='text-center'>Bold Look Sunglasses</h6>
                                                        </a>
                                                        <h4 className='text-center'>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="main-bg-light" border="0" cellPadding="0" width="100%"
                                    style={{ marginTop: "40px" }}>
                                </table>
                                <table border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr align="center">
                                            <td>
                                                <a href="#!"><img src={cosmetic} className='cosmetic' alt="img" /></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellPadding="0" width="100%" style={{ marginBottom: "40px", marginTop: "15px"}}>
                                    <tbody>
                                        <tr align="center" className="add-with-banner">
                                            <td>
                                                <a href="#!"><img src={img2} className='img2' alt="img" /></a>
                                            </td>
                                            <td>
                                                <a href="#!"><img src={img3} className='img3' alt="img" /></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="main-bg-light text-center" align="center" border="0" cellPadding="0"
                                    width="100%" style={{ margin: "0", padding: "0", background: "#f9f9f9" }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: "30px 20px" }}>
                                                <h4 className="title" style={{ margin: "0", textAlign: "center" }}>
                                                    Follow us
                                                </h4>

                                                <table border="0" cellPadding="0" className="footer-social-icon text-center"
                                                    align="center" style={{ marginTop: "20px", marginBottom: "10px" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a
                                                                    href="https://www.facebook.com"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="social-circle"
                                                                >
                                                                    <img src={facebook} alt="Facebook" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href="https://www.youtube.com"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="social-circle"
                                                                >
                                                                    <img src={youtube} alt="YouTube" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href="https://www.twitter.com"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="social-circle"
                                                                >
                                                                    <img src={twitter} alt="Twitter" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href="https://plus.google.com"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="social-circle"
                                                                >
                                                                    <img src={gplus} alt="Google Plus" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href="https://www.linkedin.com"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="social-circle"
                                                                >
                                                                    <img src={linkedin} alt="LinkedIn" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href="https://www.pinterest.com"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="social-circle"
                                                                >
                                                                    <img src={pinterest} alt="Pinterest" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div style={{ borderTop: "1px solid #ddd", margin: "20px auto 0" }}></div>
                                                <table border="0" cellPadding="0" width="100%" style={{ margin: "20px auto 0" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href="#!" style={{ fontSize: "13px" }}>Want to change how you receive these emails?</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p style={{ fontSize: "13px", margin: "0" }}>© 2025 <strong>FashionHive | Born to Stand Out. </strong>All rights reserved.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a href="#!" style={{ fontSize: "14px", margin: "0", textDecoration: "underline"}}>Unsubscribe</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmailTemplateOne
