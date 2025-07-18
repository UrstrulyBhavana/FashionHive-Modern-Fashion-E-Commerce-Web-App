import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
    return (
        <>
            {props.list ? (
                <div className={props.className}>
                    <div className="blog_list_item img-zoom-hover">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="blog_one_img">
                                    <Link to="/blog-single-one">
                                        <img src={props.img} alt="img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="blog_text">
                                    <h5 className="date_area"><Link to="/blog-single-one">{props.date} </Link></h5>
                                    <h4 className="heading"><Link to="/blog-single-one">{props.title}</Link></h4>
                                    <p className="para">{props.para}</p>
                                    <Link to="/blog-single-one" className="button">{props.button}<i className={'fa fa-arrow-right'}></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={props.className}>
                    <div className="blog_one_item img-zoom-hover">
                        <div className="blog_one_img">
                            <Link to="/blog-single-one">
                                <img src={props.img} alt="img" />
                            </Link>
                        </div>
                        <div className="blog_text">
                            <h5 className="date_area">
                                <Link to="/blog-single-one">{props.date} </Link>
                            </h5>
                            <h4 className="heading">
                                <Link to="/blog-single-one">{props.title}</Link>
                            </h4>
                            <p className="para">
                                {props.para}
                            </p>
                            <Link to="/blog-single-one" className="button">{props.button}<i className={'fa fa-arrow-right'}></i></Link>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default BlogCard

