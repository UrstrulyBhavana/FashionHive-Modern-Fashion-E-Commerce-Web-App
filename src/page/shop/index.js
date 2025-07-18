import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import Shop from '../../component/Shop/Shop'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider';
import Footer from '../../component/Common/Footer'

const ShopGrid = () => {
    return (
        <>
            <Header />
            <Banner title="Shop" />
            <Shop />
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default ShopGrid