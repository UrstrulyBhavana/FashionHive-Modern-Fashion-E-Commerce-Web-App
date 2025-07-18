import React from 'react'
import BlogSideBar from './BlogSideBar'
import BlogSingleContentTwo from './BlogSingleContentTwo'
const BlogSingleTwo = () => {
    return (
        <>
            <section id="blog_single_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <BlogSideBar />
                        <BlogSingleContentTwo />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogSingleTwo
