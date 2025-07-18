import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/team/team4.png';

const AccountDetails = () => {
    return (
        <div className="myaccount-content">
            <div className="save_button mt-3 d-flex align-items-center justify-content-between">
                <h4 className="title">Account Details</h4>
                <Link to="/account-edit" className="theme-btn-one bg-black btn_sm">Update Account</Link>
            </div>

            <div className="login_form_container mt-4">
                <div className="account_details_form">
                    <form action="#">
                        <div className="img_profiles">
                            <img src={img1} alt="User" />
                        </div>
                        <div className="input-radio  mb-4">
                            <span className="custom-radio">
                                <input type="radio" defaultValue="1" name="mr" checked readOnly /> Mr.</span>
                        </div>

                        <div className="default-form-box mb-3">
                            <label>First Name</label>
                            <input type="text" className="form-control" defaultValue="Ankit" readOnly />
                        </div>

                        <div className="default-form-box mb-3">
                            <label>Last Name</label>
                            <input type="text" className="form-control" defaultValue="Patel" readOnly />
                        </div>

                        <div className="default-form-box mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" defaultValue="ankitpatel@gmail.com" readOnly />
                        </div>

                        <div className="default-form-box mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" defaultValue="••••••••" readOnly />
                        </div>

                        <div className="default-form-box mb-3">
                            <label>Birthdate</label>
                            <input type="date" className="form-control" defaultValue="1994-05-01" readOnly />
                            <small className="form-text text-muted">(E.g.: 05/01/1994)</small>
                        </div>

                        <div className="mb-3">
                            <label className="checkbox-default">
                                <input type="checkbox" checked readOnly />{' '}
                                <span className="ml-2">Receive exclusive FashionHive offers</span>
                            </label>
                        </div>

                        <div className="mb-3">
                            <label className="checkbox-default checkbox-default-more-text">
                                <input type="checkbox" checked readOnly />{' '}
                                <span className="ml-2">Subscribe to our FashionHive newsletter</span>
                                <p className="mt-2 mb-0 small">
                                    You may unsubscribe at any moment. For that purpose, please find our contact info in
                                    the legal notice.
                                </p>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountDetails;

