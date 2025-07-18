import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BillingsInfo = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        company: '',
        email: '',
        country: '',
        city: '',
        zipcode: '',
        address: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fname || !formData.lname || !formData.company || !formData.email || !formData.country || !formData.city || !formData.zipcode || !formData.address) {
            Swal.fire('Error', 'Please fill all required fields!', 'error');
            return;
        }

        Swal.fire('Success', 'Order placed successfully!', 'success');

        setFormData({
            fname: '',
            lname: '',
            company: '',
            email: '',
            country: '',
            city: '',
            zipcode: '',
            address: '',
            notes: ''
        });

    };

    return (
        <>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="checkout-area-bg bg-white">
                    <div className="check-heading">
                        <h3>Billing Information</h3>
                    </div>
                    <div className="check-out-form">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>First Name<span className="text-danger">*</span></label>
                                        <input type="text" name="fname" value={formData.fname} onChange={handleChange} className="form-control" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Last Name<span className="text-danger">*</span></label>
                                        <input type="text" name="lname" value={formData.lname} onChange={handleChange} className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Company Name<span className="text-danger">*</span></label>
                                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-control" placeholder="Company Name" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email<span className="text-danger">*</span></label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control"  placeholder="info@gmail.com" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Country<span className="text-danger">*</span></label>
                                        <select name="country" value={formData.country} onChange={handleChange} className="form-control">
                                            <option value="">Select a country</option>
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                            <option>Canada</option>
                                            <option>Australia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>City<span className="text-danger">*</span></label>
                                        <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" placeholder="Enter Your City Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Zipcode<span className="text-danger">*</span></label>
                                        <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} className="form-control" placeholder="Enter Your zipcode" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Full Address<span className="text-danger">*</span></label>
                                        <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" placeholder="Enter your address here.." />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Additional Notes</label>
                                        <textarea rows="5" name="notes" value={formData.notes} onChange={handleChange} className="form-control"  placeholder="Order notes"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="theme-btn-one btn-black-overlay btn_sm">Place Order</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BillingsInfo;
