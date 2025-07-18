import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import LookBooks from '../../component/LookBook'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider';
import Footer from '../../component/Common/Footer'
const LookBook = () => {
    return (
        <>
            <Header />
            <Banner title="Lookbook" />
            <LookBooks />
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default LookBook