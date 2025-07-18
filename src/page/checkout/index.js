import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import Checkout from '../../component/Checkout'
import Footer from '../../component/Common/Footer'
const CheckoutOne = () => {
    return (
        <>
            <Header />
            <Banner title="Checkout" />
            <Checkout />
            <Footer />
        </>
    )
}

export default CheckoutOne