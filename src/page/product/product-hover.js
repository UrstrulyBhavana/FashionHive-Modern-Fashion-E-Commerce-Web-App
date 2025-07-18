import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ProductHovers from '../../component/Common/Product/ProductHover'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider';
import Footer from '../../component/Common/Footer'
const ProductHover = () => {
    return (
        <>
            <Header />
            <Banner title="Product Hover" />
            <ProductHovers />
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default ProductHover