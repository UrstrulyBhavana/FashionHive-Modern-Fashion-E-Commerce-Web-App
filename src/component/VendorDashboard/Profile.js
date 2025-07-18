import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <>
            <div className="vendors_profiles">
                <h4>Profile</h4>
                <ul>
                    <li>
                        <div className="profils_details_vendor">
                            <div className="profile_left">
                                <h4>Company Name:</h4>
                            </div>
                            <div className="profile_right">
                                <h4>FashionHive Pvt. Ltd.</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="profils_details_vendor">
                            <div className="profile_left">
                                <h4>Email Address:</h4>
                            </div>
                            <div className="profile_right">
                                <h4>support@fashionhive.com</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="profils_details_vendor">
                            <div className="profile_left">
                                <h4>Country / Region:</h4>
                            </div>
                            <div className="profile_right">
                                <h4>Telangana, India</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="profils_details_vendor">
                            <div className="profile_left">
                                <h4>Year Established:</h4>
                            </div>
                            <div className="profile_right">
                                <h4>2024</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="profils_details_vendor">
                            <div className="profile_left">
                                <h4>Total Employees:</h4>
                            </div>
                            <div className="profile_right">
                                <h4>101 - 200 People</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="profils_details_vendor">
                            <div className="profile_left">
                                <h4>Category:</h4>
                            </div>
                            <div className="profile_right">
                                <h4>Fashion & Lifestyle</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="profils_details_vendor">
                            <div className="profile_left">
                                <h4>Street Address:</h4>
                            </div>
                            <div className="profile_right">
                                <h4>549 Sulphur Springs Road</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="profils_details_vendor">
                            <div className="profile_left">
                                <h4>City/State:</h4>
                            </div>
                            <div className="profile_right">
                                <h4>Hyderabad, Telangana</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="profils_details_vendor">
                            <div className="profile_left">
                                <h4>Zip:</h4>
                            </div>
                            <div className="profile_right">
                                <h4>520010</h4>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="btn_left_table">
                    <Link to="/account-edit" className="theme-btn-one bg-black btn_sm">Edit Profile</Link>
                </div>
            </div>
        </>
    )
}

export default Profile
