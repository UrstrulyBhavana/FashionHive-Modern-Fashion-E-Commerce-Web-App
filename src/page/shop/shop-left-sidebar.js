import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import LeftSideBar from '../../component/Shop/LeftSideBar'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider';
import Footer from '../../component/Common/Footer'
const ShopLeftSideBar = () => {
    return (
        <>
            <Header />
            <Banner title="Shop" />
            <LeftSideBar />
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default ShopLeftSideBar