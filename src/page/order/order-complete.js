import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import OrderCompleted from '../../component/OrderCompleted'
import Footer from '../../component/Common/Footer'
const OrderComplete = () => {
    return (
        <>
            <Header />
            <Banner title="Order Complete" />
            <OrderCompleted />
            <Footer />
        </>
    )
}

export default OrderComplete