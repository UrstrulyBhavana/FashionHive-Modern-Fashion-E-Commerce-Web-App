import React from 'react'
import { Link } from 'react-router-dom'
import avater from '../../../assets/img/common/avater.png'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import Swal from 'sweetalert2';

const TopHeader = () => {
    let dispatch = useDispatch();
    const history = useHistory()

    let status = useSelector((state) => state.user.status);
    let user = useSelector((state) => state.user.user);

    const logout = () => {
        dispatch({ type: 'user/logout' });
        Swal.fire({
            icon: 'success',
            title: 'Logged Out',
            text: 'You have been successfully logged out.'
        });
        history.push("/login");
    };

    return (
        <>
            <section id="top_header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="top_header_left">
                                <p>Special collection already available.<Link to="/shop">Read more...</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="top_header_right">
                                {
                                    !status ?
                                        <ul className="right_list_fix">
                                            <li><Link to="/compare"><i className="fa fa-refresh"></i> Compare</Link></li>
                                            <li><Link to="/login"><i className="fa fa-user"></i> Login</Link></li>
                                            <li><Link to="/register"><i className="fa fa-lock"></i> Register</Link></li>
                                        </ul>
                                        :
                                        <ul className="right_list_fix">
                                            <li><Link to="/order-tracking"><i className="fa fa-truck"></i> Track your Order</Link></li>
                                            <li className="after_login">
                                                <img src={avater} alt="avater" style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", marginRight: "6px" }} />
                                                {user.email || 'Sienna Luxe'} <i className="fa fa-angle-down"></i>
                                                <ul className="custom_dropdown">
                                                    <li><Link to="/my-account"><i className="fa fa-tachometer"></i> Dashboard</Link></li>
                                                    <li><Link to="/my-account/customer-order"><i className="fa fa-cubes"></i> My Orders</Link></li>
                                                    <li><Link to="#!" onClick={() => { logout() }} ><i className="fa fa-sign-out"></i> Logout</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopHeader