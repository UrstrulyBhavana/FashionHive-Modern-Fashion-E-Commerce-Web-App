import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import BlogSingleOne from '../../component/Blog/BlogSingleOne'
import BlogSideBar from '../../component/Blog/BlogSideBar'
import BlogSingleContent from '../../component/Blog/BlogSingleContent'
import FashionInstagramSlider from '../../component/Common/Instagram/FashionInstagramSlider';
import Footer from '../../component/Common/Footer'

const BlogSingleOnes = () => {
    return (
        <>  
            <Header />
            <Banner title="Blog Single" />
            <BlogSingleOne>
                <BlogSingleContent />
                <BlogSideBar />
            </BlogSingleOne>
            <FashionInstagramSlider />
            <Footer />
        </> 
    )
}

export default BlogSingleOnes
