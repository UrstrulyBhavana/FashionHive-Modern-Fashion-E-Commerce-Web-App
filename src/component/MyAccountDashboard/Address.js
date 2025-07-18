import React from 'react'

const Address = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="myaccount-content">
                        <h4 className="title">Billing Address</h4>
                        <div className="billing_address">
                            <h5><strong>Rohit Sharma</strong></h5>
                            <p>
                            Plot No. 25, Road No. 03<br />  Banjara Hills, Hyderabad - 500034
                            </p>
                            <p>Mobile: +91 98765 43210</p>
                            <button className="theme-btn-one bg-black btn_sm mt-4">Edit Address</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="myaccount-content">
                        <h4 className="title">Shipping Address</h4>
                        <div className="billing_address">
                            <h5><strong>Priya Reddy</strong></h5>
                            <p>
                             Flat No. 12A, Sai Residency <br />  Kukatpally, Hyderabad - 500072
                            </p>
                            <p>Mobile: +91 91234 56789</p>
                            <button  className="theme-btn-one bg-black btn_sm mt-4">Edit Address</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
