import React from 'react'
import { useHistory } from 'react-router';

const OrderTracking = () => {
    const history = useHistory()
    return (
        <>
            <section id="order_tracking" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="order_tracking_wrapper">
                                <button onClick={() => history.goBack()} className="theme-btn-one btn-black-overlay btn_sm mb-3">
                                    <i className="fa fa-arrow-left mr-2"></i> Go Back
                                </button>

                                <h2 className="title mb-3 text-center">Track Your Order</h2>
                                <p>To track your order please enter your Order ID in the box below and press the "Track" button.</p>

                                <form onSubmit={(e) => { 
                                    e.preventDefault(); 
                                    history.push('/order-complete')
                                 }}>
                                    <div className="form-group">
                                        <label htmlFor="order_ID">Order ID</label>
                                        <input type="text" id="order_ID" className="form-control" placeholder="Found in your order Confirmation email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="billing_email">Billing Email</label>
                                        <input type="email" id="billing_email" className="form-control" placeholder="Enter Your Email Address" required/>
                                    </div>
                                    <div className="order_track_button">
                                        <button type="submit" className="theme-btn-one btn-black-overlay btn_md">Track</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderTracking
