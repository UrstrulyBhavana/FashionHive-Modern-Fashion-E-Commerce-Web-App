import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ img, date, heading, para, button }) => (

  <div className="col-lg-6 col-md-6 col-sm-12">
    <article className="fh-blog-card">
      <Link to="/blog-single-one" className="fh-blog-img">
        <img src={img} alt={heading} />
        <span className="fh-blog-date">
          <i className="far fa-calendar-alt" /> {date}
        </span>
      </Link>

      <div className="fh-blog-body">
        <h5 className="fh-blog-title">{heading}</h5>
        <p className="fh-blog-excerpt">{para}</p>
        <Link to="/blog-single-one" className="fh-blog-btn">
          {button}
        </Link>
      </div>
    </article>
  </div>
);

export default BlogCard;
