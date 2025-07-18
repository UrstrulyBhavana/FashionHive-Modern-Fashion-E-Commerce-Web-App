import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import header from '../../assets/img/email/header.jpg'
import pro1 from '../../assets/img/email/pro-4.jpg'
import pro2 from '../../assets/img/email/pro-6.jpg'
import pro3 from '../../assets/img/email/pro-9.jpg'
import pro4 from '../../assets/img/email/pro-7.jpg'
import feature1 from '../../assets/img/email/feature1.jpg'
import feature2 from '../../assets/img/email/feature2.jpg'
import facebook from '../../assets/img/email/facebook.png'
import youtube from '../../assets/img/email/youtube.png'
import twitter from '../../assets/img/email/twitter.png'
import gplus from '../../assets/img/email/gplus.png'
import linkedin from '../../assets/img/email/linkedin.png'
import pinterest from '../../assets/img/email/pinterest.png'

const EmailTemplateThree = () => {
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    };
    return (
        <>
            <div className="email_area_three">
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
                                                        <Link className="nav-link" to="/contact-two">Contact</Link>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="slider" align="center" border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <th align="center" width="40%">
                                                <img src={header} alt="img" style={{ marginBottom: "-5px", borderRadius: "6px", padding: "3px", boxShadow: "0 2px 6px rgba(0,0,0,0.08)", border: "1px solid #eee" }} />
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td><h4 className="title" style={{ width: "100%", textAlign: "center", marginTop: "50px",  color: "#670D2F",letterSpacing:"2px" }}>trending product</h4></td>
                        </tr>
                        <tr>
                            <td><p style={{ margin: "0" }}>GET EVEN 25% OFF DISCOUNT</p></td>
                        </tr>

                        <tr>
                            <td>
                                <table align="center" border="0" cellPadding="0" width="100%" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ verticalAlign: "top" }}>
                                                <div
                                                    style={{
                                                        backgroundColor: "#f4f4f4",
                                                        borderRadius: "6px",
                                                        padding: "10px",
                                                        height: "100%",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                                                        border: "1px solid #eee",
                                                    }}
                                                >
                                                    <img
                                                        src={pro1}
                                                        alt="Style Alert"
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
                                                            borderRadius: "6px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                    <div className="product-info" style={{ marginTop: "10px" }}>
                                                        <h6 style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "14px", textAlign: "center", margin: 0 }}>
                                                            Style Alert
                                                        </h6>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro2} alt="product" style={{ width: "100%", borderRadius: "6px", padding: "3px", boxShadow: "0 2px 6px rgba(0,0,0,0.08)", border: "1px solid #eee" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" >
                                                            <h6>Boho Vibe Crop Top</h6>
                                                        </a>
                                                        <h4>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro3} alt="product" style={{ width: "100%", borderRadius: "6px", padding: "3px", boxShadow: "0 2px 6px rgba(0,0,0,0.08)", border: "1px solid #eee" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" >
                                                            <h6>Sunny Stripes Tee</h6>
                                                        </a>
                                                        <h4>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro4} alt="product" style={{ width: "100%", borderRadius: "6px", padding: "3px", boxShadow: "0 2px 6px rgba(0,0,0,0.08)", border: "1px solid #eee" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" >
                                                            <h6>Urban Minimal Tank</h6>
                                                        </a>
                                                        <h4>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <table border="0" cellPadding="0" align="center" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr align="center" className="add-with-banner">
                                            <td>
                                                <a href="#!">
                                                    <img src={feature1} alt="product"
                                                     style={{ width: "100%", borderRadius: "6px", padding: "3px", boxShadow: "0 2px 6px rgba(0,0,0,0.08)", border: "1px solid #eee" }} 
                                                    />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <table align="center" border="0" cellPadding="0" width="100%" style={{ marginTop: "30px" }}>

                                    <tbody>
                                        <tr>
                                            <th align="center" width="40%">
                                                <img src={feature2} alt="img"
                                                    style={{ marginBottom: "40px", borderRadius: "6px", padding: "3px", boxShadow: "0 2px 6px rgba(0,0,0,0.08)", border: "1px solid #eee" }} />
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>
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

export default EmailTemplateThree
