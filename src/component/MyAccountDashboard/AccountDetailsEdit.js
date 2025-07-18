import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import img1 from '../../assets/img/team/team1.png'

const AccountDetailsEdit = () => {
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    };

    return (
        <>
            <section id="account_edit" className="pt-100 pb-100">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="back_btn">
                                <Link to="/" onClick={routeChange}><i className="fa fa-arrow-left"></i>Back to Dashboard</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row  align-items-start">
                        <div className="col-lg-3 text-center mb-4 mb-lg-0">
                            <div className="account_thumd">
                                <div className="account_thumb_img position-relative">
                                    <img src={img1} alt="User" className="img-fluid rounded-circle" />
                                    <div className="fixed_icon position-absolute">
                                        <input type="file" className="d-none" id="upload" />
                                        <label htmlFor="upload">
                                            <i className="fa fa-camera"></i>
                                        </label>
                                    </div>
                                </div>
                                <h4 className="mt-3 mb-1">Aaradhya Verma</h4>
                                <p>Brand Strategist</p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="account_setting">
                                <div className="account_setting_heading mb-3">
                                    <h2>Account Info Edit</h2>
                                    <p>Update your account details and change your password below.</p>
                                </div>
                                <form id="account_info_form"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        history.push('/vendor/vendor-profile')
                                    }}
                                >
                                    <div className="input-radio">
                                        <span className="custom-radio"><input type="radio" value="1" name="id_gender" defaultChecked /> Mr.</span>
                                        <span className="custom-radio"><input type="radio" value="1" name="id_gender" /> Mrs.</span>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="f_name">First Name</label>
                                            <input type="text" className="form-control" id="f_name" placeholder="Aaradhya" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="l_name">Last Name</label>
                                            <input type="text" className="form-control" id="l_name" placeholder="Verma" required />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="email_address">Email Address</label>
                                        <input type="email" className="form-control" id="email_address"
                                            placeholder="aaradhya.verma@fashionhive.com" required />
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="current_password">Current Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="current_password"
                                                placeholder="Current"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="new_password">New Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="new_password"
                                                placeholder="New"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="re_password">Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="re_password"
                                                placeholder="Confirm"
                                                required
                                            />
                                        </div>
                                    </div>


                                    <button type="submit"
                                        className="theme-btn-one bg-black btn_sm mt-2">Update Information</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccountDetailsEdit
