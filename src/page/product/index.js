import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ProductDetailsOne from '../../component/Common/ProductDetails/ProductDetails'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider';
import Footer from '../../component/Common/Footer'

const ProductDetails = () => {
    return (
        <>
            <Header />
            <Banner title="Product Details" />
            <ProductDetailsOne />
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default ProductDetails