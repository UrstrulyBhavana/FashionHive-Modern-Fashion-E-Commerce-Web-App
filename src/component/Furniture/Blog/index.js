import React from 'react'
import BlogCard from './BlogCard'
import { BlogData } from './BlogData'
import Heading from '../Heading'

const Blog = () => {
    
    return (
        <>
    <section id="blog_area_two" className="ptb-100">
        <div className="container">
            <Heading heading="BLOG POST"/>
            <div className="row">
            {BlogData.slice(0, 2).map((data, index)=>(
                 <BlogCard key={index} img={data.img} date={data.date} heading={data.heading} para={data.para} button={data.button} />
            ))}
                
            </div>
        </div>
    </section>
        </>
    )
}

export default Blog
