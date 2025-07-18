import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import Swal from 'sweetalert2';

const Sidebar = () => {
    const location = useLocation()
    let dispatch = useDispatch();
    const history = useHistory()
    let status = useSelector((state) => state.user.status);
    const logout = () => {
        Swal.fire({
            icon: 'success',
            title: 'Logout Sucessfull',
            text: 'Thank You'
        })
        dispatch({ type: "user/logout" })
        history.push("/login");
    }
    return (
        <>
            <div className="col-sm-12 col-md-12 col-lg-3">
                <div className="dashboard_tab_button">
                    <ul role="tablist" className="nav flex-column dashboard-list">
                        <li><Link to="/my-account" className={location.pathname === '/my-account'?'active':null}><i className="fa fa-tachometer"></i>Dashboard</Link></li>
                        <li> <Link to="/my-account/customer-order" className={location.pathname === '/my-account/customer-order'?'active':null}><i className="fa fa-cart-arrow-down"></i>Orders</Link></li>
                        <li><Link to="/my-account/customer-download" className={location.pathname === '/my-account/customer-download'?'active':null}><i className="fa fa-cloud-download"></i>Downloads</Link></li>
                        <li><Link to="/my-account/customer-address" className={location.pathname === '/my-account/customer-address'?'active':null}><i className="fa fa-map-marker"></i>Addresses</Link></li>
                        <li><Link to="/my-account/customer-account-details" className={location.pathname === '/my-account/customer-account-details'?'active':null}><i className="fa fa-user"></i>Account Details</Link></li>
                        {
                            status?<li><Link to="/#!" onClick={(e)=>{e.preventDefault();logout()}}><i className="fa fa-sign-out"></i>logout</Link></li>:null
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
