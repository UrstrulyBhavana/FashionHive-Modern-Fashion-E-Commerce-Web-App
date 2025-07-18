import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('Direct Bank Transfer');

    const handleSubmit = () => {
        Swal.fire(
            'Order Placed!',
            `You selected ${paymentMethod} as your payment method.`,
            'success'
        );
    };

    return (
        <>
            <div className="order_review bg-white">
                <div className="check-heading">
                    <h3>Payment</h3>
                </div>
                <div className="payment_method">
                    <form>
                        <div className="accordion" id="accordionExample">
                            <div className="payment_area_wrappers">
                                <div className="heading_payment">
                                    <div>
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="bank"
                                            value="Direct Bank Transfer"
                                            checked={paymentMethod === 'Direct Bank Transfer'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="bank">Direct Bank Transfer</label>
                                    </div>
                                    <div className="payment_body">
                                        <p>Pay securely via your bank account.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="payment_area_wrappers">
                                <div className="heading_payment">
                                    <div>
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="mobile"
                                            value="Mobile Banking"
                                            checked={paymentMethod === 'Mobile Banking'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="mobile">Mobile Banking</label>
                                    </div>
                                    <div className="payment_body">
                                        <p>Use your mobile banking app to complete the payment.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="payment_area_wrappers">
                                <div className="heading_payment">
                                    <div>
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="paypal"
                                            value="PayPal"
                                            checked={paymentMethod === 'PayPal'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="paypal">PayPal</label>
                                    </div>
                                    <div className="payment_body">
                                        <p>Pay via your PayPal account or credit card.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <button
                    className="theme-btn-one btn-black-overlay btn_sm"
                    onClick={handleSubmit}
                >
                    Place Order
                </button>
            </div>
        </>
    );
};

export default Payment;
