import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import slider from '../../assets/img/email/e-2-slider.jpg'
import pro1 from '../../assets/img/email/p1.jpg'
import pro2 from '../../assets/img/email/p2.jpg'
import banner1 from '../../assets/img/email/banner.jpg'
import banner2 from '../../assets/img/email/banner-2.jpg'
import ps1 from '../../assets/img/email/ps1.jpg'
import ps2 from '../../assets/img/email/ps2.jpg'
import ps3 from '../../assets/img/email/ps3.jpg'
import facebook from '../../assets/img/email/facebook.png'
import youtube from '../../assets/img/email/youtube.png'
import twitter from '../../assets/img/email/twitter.png'
import gplus from '../../assets/img/email/gplus.png'
import linkedin from '../../assets/img/email/linkedin.png'
import pinterest from '../../assets/img/email/pinterest.png'

const EmailTemplateTWo = () => {
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    };
    return (
        <>
            <div className="email_two_area">
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
                                                <img src={logo} className="main-logo" alt="img" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="slider" align="center" border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <th align="center" width="40%">
                                                <Link to="/shop">
                                                    <img src={slider} alt="img" style={{ marginBottom: "-5px", borderRadius: "6px", padding: "3px",  boxShadow: "0 2px 6px rgba(0,0,0,0.08)", border:"1px solid #eee" }} />
                                                </Link>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4 className="trend-title">trending product</h4>
                                <p style={{ margin: "0" }}>GET EVEN 25% OFF DISCOUNT</p>

                                <table align="center" border="0" cellPadding="0" width="100%" style={{ marginTop: "30px"}}>
                                    <tbody>
                                        <tr>
                                            <td style={{ paddingRight: "10px" }}> 
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro1}
                                                            alt="Chic Black Jacket – Urban Style" 
                                                            className='pro1'
                                                        />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" >
                                                            <h6>Chic Black Jacket – Urban Style</h6>
                                                        </a>
                                                        <h4>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro2} alt="product" className='pro2'/>
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" >
                                                            <h6>Striped Casual Knit – Spring Collection</h6>
                                                        </a>
                                                        <h4>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td> 
                                        </tr>
                                    </tbody>
                                </table>
                             
                                
                                <table border="0" cellPadding="0" align="center" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr align="center" className="add-with-banner">
                                            <td>
                                                <a href="#!">
                                                    <img src={banner1} alt="product" className='banner1' />
                                                </a>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                                <table border="0" cellPadding="0" align="center" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={banner2} alt="img" className='banner2'/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellPadding="0" width="100%" style={{ maxWidth: "500px", marginTop: "30px", background: "#f5f5f5", borderRadius: "6px" }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "50%", padding: "10px", verticalAlign: "middle" }}>
                                                <img src={ps1} alt="Handwoven Bag" className='ps1'/>
                                            </td>
                                            <td style={{ width: "50%", textAlign: "center", padding: "10px", verticalAlign: "middle" }}>
                                                <h3 style={{ margin: "0", fontSize: "18px" }}>Handwoven Blue Crochet Bag</h3>
                                                <p style={{ margin: "8px 0", fontSize: "14px", color: "#E01931" }}>
                                                    <strike style={{ color: "#777", marginRight: "8px" }}>$25.00</strike>$20.90
                                                </p>
                                                <a href="#!" style={{ display: "inline-block", background: "#000", color: "#fff", padding: "8px 14px", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none", borderRadius: "3px" }}>Shop Now</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table align="center" border="0" cellPadding="0" width="100%" style={{ maxWidth: "500px", marginTop: "20px", background: "#f5f5f5", borderRadius: "6px" }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "50%", textAlign: "center", padding: "10px", verticalAlign: "middle" }}>
                                                <h3 style={{ margin: "0", fontSize: "18px" }}>Baby Knit Wool Set</h3>
                                                <p style={{ margin: "8px 0", fontSize: "14px", color: "#E01931" }}>
                                                    <strike style={{ color: "#777", marginRight: "8px" }}>$25.00</strike>$20.90
                                                </p>
                                                <a href="#!" style={{ display: "inline-block", background: "#000", color: "#fff", padding: "8px 14px", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none", borderRadius: "3px" }}>Shop Now</a>
                                            </td>
                                            <td style={{ width: "50%", padding: "10px", verticalAlign: "middle" }}>
                                                <img src={ps2} alt="Baby Knit Wool Set" className='ps2'/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table align="center" border="0" cellPadding="0" width="100%" style={{ maxWidth: "500px", marginTop: "20px", background: "#f5f5f5", borderRadius: "6px", marginBottom: "40px" }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "50%", padding: "10px", verticalAlign: "middle" }}>
                                                <img src={ps3} alt="Cozy Infant Sweater" className='ps3'/>
                                            </td>
                                            <td style={{ width: "50%", textAlign: "center", padding: "10px", verticalAlign: "middle" }}>
                                                <h3 style={{ margin: "0", fontSize: "18px" }}>Cozy Infant Sweater</h3>
                                                <p style={{ margin: "8px 0", fontSize: "14px", color: "#E01931" }}>
                                                    <strike style={{ color: "#777", marginRight: "8px" }}>$25.00</strike>$20.90
                                                </p>
                                                <a href="#!" style={{ display: "inline-block", background: "#000", color: "#fff", padding: "8px 14px", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none", borderRadius: "3px" }}>Shop Now</a>
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
                                                                <a href="#!" style={{ fontSize: "14px", margin: "0", textDecoration: "underline" }}>Unsubscribe</a>
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

export default EmailTemplateTWo


