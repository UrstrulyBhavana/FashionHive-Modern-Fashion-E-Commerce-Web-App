import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import OrderTrackings from '../../component/OrderTrackng'
import Footer from '../../component/Common/Footer'
const OrderTracking = () => {
    return (
        <>
            <Header />
            <Banner title="Order Tracking" />
            <OrderTrackings />
            <Footer />
        </>
    )
}

export default OrderTracking