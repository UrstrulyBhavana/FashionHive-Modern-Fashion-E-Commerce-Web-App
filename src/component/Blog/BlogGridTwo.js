import React from 'react'
import { BlogData } from './BlogData'
import BlogCard from './BlogCard'

const BlogGridTwo = () => {
    return (
        <>
            <section id="blog_grid_area_one" className="ptb-100">
                <div className="container">
                    <div className="row">
                        {BlogData.slice(0, 6).map((data, index) => (
                            <BlogCard img={data.img} title={data.title} para={data.para} date={data.date} className="col-lg-6 col-md-6 col-sm-6 col-12" button={data.button} key={index} />
                        ))}
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#!">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#!" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogGridTwo
