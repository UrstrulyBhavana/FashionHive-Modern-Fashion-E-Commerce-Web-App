import React from 'react'
import { Link } from 'react-router-dom'
import success from '../../assets/img/email/success.png';

const OrderComplete = () => {
    return (
        <>
            <section id="order_complet_area" className="ptb-100 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="text-center order_complete">
                            <img src={success} alt="success" style={{ width: "80px", marginBottom: "20px" }} />
                                <div className="order_complete_heading">
                                    <h2>Your order is completed</h2>
                                    <h4 className="mb-2" style={{ color: "#444444", paddingTop: "15px"}}>Thank you for shopping with FashionHive!</h4>
                                </div>
                                <p style={{color: "#444444", letterSpacing: "0.2px" }}> Your order is being processed and will be completed within 3–6 hours.
                                You will receive an email confirmation once the order is ready.</p>
                                <Link to="/shop" className="theme-btn-one bg-black btn_sm">Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderComplete
