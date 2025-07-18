import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import BlogSingleTwo from '../../component/Blog/BlogSingleTwo'
import BlogSideBar from '../../component/Blog/BlogSideBar'
import BlogSingleContentTwo from '../../component/Blog/BlogSingleContentTwo'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider'
import Footer from '../../component/Common/Footer'

const BlogSingleTwos = () => {
    return (
        <>
            <Header />
            <Banner title="Blog Single" />
            <BlogSingleTwo>
                <BlogSingleContentTwo />
                <BlogSideBar />
            </BlogSingleTwo>
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default BlogSingleTwos
