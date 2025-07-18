import React, { useState } from 'react';
import Map from './Map'
import { Link } from 'react-router-dom' 
import Swal from 'sweetalert2'

const ContactTwoArea = () => {
     
        const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire('Thank You', 'We Got Your Message', 'success');

        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <section id="contact_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_form_one contact_info_wrapper contact_info">
                                <h3 className="text-center">Get In Touch</h3>
                                <p>
                                   Have a question or need help with your FashionHive experience? Reach out to us — our team is here to help you stand out with style.
                                </p>
                                  <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input 
                                                 type="text" 
                                                 className="form-control" 
                                                 name="name" 
                                                 placeholder="Name" 
                                                 required
                                                 value={formData.name}
                                                 onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input 
                                                 type="email" 
                                                 className="form-control" 
                                                 name="email" 
                                                 placeholder="Email" 
                                                 required
                                                 value={formData.email}
                                                 onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                            <input 
                                                type="tel" 
                                                className="form-control" 
                                                name="phone" 
                                                placeholder="Phone" 
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input 
                                                 type="text" 
                                                 className="form-control" 
                                                 name="subject" 
                                                 placeholder="Subject" 
                                                 required
                                                 value={formData.subject}
                                                 onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea 
                                                 rows="5" 
                                                 className="form-control" 
                                                 name="message" 
                                                 placeholder="Message" 
                                                 required
                                                 value={formData.message}
                                                 onChange={handleChange}>
                                                </textarea>
                                            </div>
                                            <div className="submit_bitton_contact_one">
                                                <button  className="theme-btn-one btn-black-overlay btn_md">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="left_side_contact contact_info_wrapper">
                                <ul>
                                    <li className="address_location">
                                        <div className="contact_widget ">
                                            <i className="fa fa-map-marker"></i>
                                            <p>FashionHive HQ, Road 12, Banjara Hills, <br/> Hyderabad 500034, India</p>
                                        </div>
                                    </li>

                                    <li className="address_location">
                                        <div className="contact_widget">
                                            <i className="fa fa-phone"></i>
                                            <Link to="/">+91 98765 43210</Link>
                                        </div>
                                        <div className="contact_widget">
                                            <i className="fa fa-mobile"></i>
                                            <Link to="/">+91 91234 56789</Link>
                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <div className="contact_widget">
                                            <i className="fa fa-envelope"></i>
                                            <Link to="/">support@fashionhive.in</Link>
                                        </div>
                                        <div className="contact_widget">
                                            <i className="fa fa-globe"></i>
                                            <Link to="/">www.fashionhive.in</Link>
                                        </div>
                                    </li>
                                </ul>
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactTwoArea