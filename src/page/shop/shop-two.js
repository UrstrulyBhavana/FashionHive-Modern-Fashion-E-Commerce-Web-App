import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ShopTwo from '../../component/Shop/ShopTwo'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider';
import Footer from '../../component/Common/Footer'

const Shop = () => {
    return (
        <>
            <Header />
            <Banner title="Shop" />
            <ShopTwo />
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default Shop