import React from 'react'
import CommentForm from './CommentForm'
import RelatedPost from './RelatedPost'
import SingleCommentArea from './SingleCommentArea'
import img1 from '../../assets/img/blog/blog_single.png'
import post1 from '../../assets/img/blog/post2.png'
import post2 from '../../assets/img/blog/post3.png'
import post4 from '../../assets/img/blog/post4.png'
import author from '../../assets/img/user/author.png'

const BlogSingleContent = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog_single_content">
          <div className="blog_single_img img-zoom-hover">
            <img src={img1} alt="img" />
          </div>
          <div className="blog_single_widget">
            <div className="blog_single_date">
              <ul>
                <li>May 16, 2025 - By <a href="#!"> FashionHive Editorial</a></li>
              </ul>
            </div>
            <div className="blog_single_first_Widget">
              <h2>Effortless Street Style: Your Everyday Chic Guide</h2>
              <p>
                Street style is the language of confidence. In today's fashion world, everyday outfits have evolved into statements. This post explores how to create a chic and comfortable style for your daily city life.              </p>
              <p>
                Start with versatile basics like mom jeans, oversized jackets, and crop tops. Pair with bold accessories, crossbody bags, and white sneakers to bring balance. Confidence is your best accessory.
              </p>
              <blockquote>
                “Fashion is the armor to survive the reality of everyday life.” — Bill Cunningham
              </blockquote>
              <p>
                Mix and match textures like leather and denim, play with layers, and don’t fear standing out. Whether you’re heading to a café or co-working space, own your style like a true street icon.
              </p>
            </div>
            <div className="blog_details_center_img">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="single_center_img img-zoom-hover">
                    <img src={post1} alt="img" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="single_center_img img-zoom-hover">
                    <img src={post2} alt="img" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="single_center_img img-zoom-hover">
                    <img src={post4} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog_single_secend_widget">
              <h2>Streetwear Staples for Women</h2>
              <p>
              Embrace neutral tones or bold prints, add combat boots or dad sneakers for an edge. Whether you're petite or plus-size, there's a street style formula for everyone.
              </p>
            </div>
            <div className="single_categoris_bottom">
              <ul>
                <li><a href="#!">Streetwear</a></li>
                <li><a href="#!">Urban</a></li>
                <li><a href="#!">Confidence</a></li>
                <li><a href="#!">FashionHive</a></li>
              </ul>
            </div>
          </div>
          <div className="card post_author">
            <div className="card-body">
              <div className="author_img">
                <img src={author} alt="author" />
              </div>
              <div className="author_info">
                <h6 className="author_name">
                  <a href="#!" className="mb-1 d-inline-block">Maria Redwood</a>
                </h6>
                <p>
                  Maria is a senior editor at FashionHive and passionate about accessible street fashion for everyday women. She believes your outfit should always tell your story.
                </p>
              </div>
            </div>
          </div>
          <RelatedPost />
          <SingleCommentArea />
          <CommentForm />
        </div>
      </div>
    </>
  )
}

export default BlogSingleContent
