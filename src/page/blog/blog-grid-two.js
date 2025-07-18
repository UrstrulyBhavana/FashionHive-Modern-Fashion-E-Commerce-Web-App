import React from 'react'
import BlogGridTwo from '../../component/Blog/BlogGridTwo'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider';
import Footer from '../../component/Common/Footer'

const BlogGridTwos = () => {
    return (
        <>
            <Header />
            <Banner title="Blog" />
            <BlogGridTwo /> 
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default BlogGridTwos
