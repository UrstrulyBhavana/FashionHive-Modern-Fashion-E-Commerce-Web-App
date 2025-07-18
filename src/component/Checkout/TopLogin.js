import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';

const TopLogin = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.user.status);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [coupon, setCoupon] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            Swal.fire('Error', 'Please enter both email and password.', 'error');
            return;
        }

        const namePart = email.split('@')[0];
        const name = namePart.charAt(0).toUpperCase() + namePart.slice(1);

        if (status) {
            Swal.fire('Already Logged In', `You are already logged in as ${email}`, 'info');
        } else {
            dispatch({ type: "user/login", payload: { email, name, pass: password } });
            Swal.fire('Success', `Welcome ${name}`, 'success');
            setEmail('');
            setPassword('');
        }

        const loginCollapse = document.getElementById('checkout_login');
        if (loginCollapse) {
            loginCollapse.classList.remove('show');
        }
    };

    const handleCoupon = (e) => {
        e.preventDefault();

        if (!coupon) {
            Swal.fire('Error', 'Please enter a coupon code.', 'error');
            return;
        }

        if (coupon.trim().toUpperCase() === 'FASHION20') {
            Swal.fire(
                'Success!',
                'Coupon code applied. You saved 20%!',
                'success'
            );
            setCoupon('');
        } else {
            Swal.fire(
                'Invalid',
                'Coupon code is invalid.',
                'error'
            );
            setCoupon('');
        }
    };

    const handleLogout = () => {
        dispatch({ type: "user/logout" });
        Swal.fire('Logged Out', 'You have been logged out successfully.', 'success');
    };

    return (
        <div className="col-12">
            <div className="user-actions accordion">
                <h3>
                    <i className="fa fa-file mr-2"></i>
                    Returning customer?
                    <a className="Returning ml-2" href="#!" data-toggle="collapse" data-target="#checkout_login" aria-expanded="true">
                        Click here to login
                    </a>
                </h3>
                <div id="checkout_login" className="collapse" data-parent="#checkout_login">
                    <div className="checkout_info">
                        {!status ? (
                            <>
                                <p>If you have shopped with us before, please enter your details below.</p>
                                <form onSubmit={handleLogin}>
                                    <div className="form_group default-form-box">
                                        <label>Username or email <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter Your Email ID"
                                        />
                                    </div>
                                    <div className="form_group default-form-box">
                                        <label>Password <span className="text-danger">*</span></label>
                                        <input
                                            type="password"
                                            autoComplete="off"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter Your Password"
                                        />
                                    </div>
                                    <div className="form_group group_3 default-form-box">
                                        <button className="theme-btn-one btn-black-overlay btn_md" type="submit">
                                            Login
                                        </button>
                                        <label className="checkbox-default">
                                            <input type="checkbox" />
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                </form>
                            </>
                        ) : (
                            <div>
                                <p>You are already logged in.</p>
                                <button
                                    onClick={handleLogout}
                                    className="theme-btn-one btn-black-overlay btn_md mt-2"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="user-actions accordion mt-4">
                <h3>
                    <i className="fa fa-file mr-2"></i>
                    Enter your voucher code
                    <a className="Returning ml-2" href="#!" data-toggle="collapse" data-target="#checkout_coupon" aria-expanded="true">
                        Click here to enter your code
                    </a>
                </h3>
                <div id="checkout_coupon" className="collapse checkout_coupon" data-parent="#checkout_coupon">
                    <div className="checkout_info">
                        <form onSubmit={handleCoupon}>
                            <input
                                className="form-control mb-2"
                                placeholder="Use code FASHION20"
                                type="text"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                required
                                style={{ maxWidth: '250px', width: '100%' }}
                            />
                            <button type="submit" className="theme-btn-one btn-black-overlay btn_sm ml-2">
                                Apply coupon
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopLogin;



