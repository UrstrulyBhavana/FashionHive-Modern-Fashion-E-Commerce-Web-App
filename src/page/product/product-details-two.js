import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ProductDetailsTwos from '../../component/Common/ProductDetails/ProductDetailsTwo'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider';
import Footer from '../../component/Common/Footer'

const ProductDetailsTwo = () => {
    return (
        <>
            <Header />
            <Banner title="Product Details" />
            <ProductDetailsTwos />
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default ProductDetailsTwo