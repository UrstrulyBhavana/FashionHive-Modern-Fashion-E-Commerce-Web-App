import React from 'react'
import BlogCard from './BlogCard'
import { BlogData } from './BlogData'

const RelatedPost = () => {
    return (
        <>
            <div className="related_blogs">
                  <h2 className="section-title">You Might Also Like</h2>
                <div className="row">
                    {BlogData.slice(0, 2).map((data, index) => (
                        <BlogCard 
                         img={data.img} t
                         itle={data.title} 
                         para={data.para} 
                         date={data.date} 
                         className="col-lg-6 col-md-6 col-sm-6 col-12"
                         button={data.button} 
                         key={index} 
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default RelatedPost