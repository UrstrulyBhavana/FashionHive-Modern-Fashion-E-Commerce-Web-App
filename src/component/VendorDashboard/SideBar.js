import React from 'react'
import { Link , useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation()
    return (
        <>
            <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="dashboard_tab_button">
                        <ul role="tablist" className="nav flex-column dashboard-list">
                            <li><Link to="/vendor-dashboard" className={location.pathname === '/vendor-dashboard'?'active':null}><i className="fa fa-tachometer"></i>  Dashboard</Link></li>
                            <li><Link to="/vendor/all-product" className={location.pathname === '/vendor/all-product'?'active':null}><i className="fa fa-shopping-cart"></i>Product</Link></li>
                            <li><Link to="/vendor/all-order" className={location.pathname === '/vendor/all-order'?'active':null}><i className="fa fa-shopping-bag"></i>Order</Link></li>
                            <li><Link to="/vendor/vendor-profile" className={location.pathname === '/vendor/vendor-profile'?'active':null}><i className="fa fa-id-badge"></i>Profile</Link></li>
                            <li><Link to="/vendor/add-products" className={location.pathname === '/vendor/add-products'?'active':null}><i className="fa fa-plus-square"></i>Add Product</Link></li>
                            <li><Link to="/vendor/vendor-setting" className={location.pathname === '/vendor/vendor-setting'?'active':null}><i className="fa fa-cog"></i>Settings</Link></li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default SideBar
