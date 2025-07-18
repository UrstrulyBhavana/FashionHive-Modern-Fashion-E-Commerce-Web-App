import React from 'react'
import CommentForm from './CommentForm'
import RelatedPost from './RelatedPost'
import SingleCommentArea from './SingleCommentArea'
import img1 from '../../assets/img/blog/blog_single2.png'
import author from '../../assets/img/user/author.png'

const BlogSingleContentTwo = () => {
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
                <li>May 16, 2025 - By <a href="#!">FashionHive Editorial</a></li>
              </ul>
            </div>
            <div className="blog_single_first_Widget">
              <h2>Glow Mode: Bright Colors, Brighter Mood</h2>
              <p>
                When your outfit glows, your confidence follows. This season, bright colors are more than a trend — they’re a celebration of individuality. Whether you’re dressing for brunch, a casual hangout, or a photo walk, bold tones can transform your look.
              </p>
              <p>
                Embrace sunshine yellows, electric blues, and fuchsia pinks. Pair a solid neon top with neutral trousers or rock a color-blocked co-ord set. Vibrant hues spark energy — and heads will turn.
              </p>
              <blockquote>
                “Color is a power which directly influences the soul.” – Wassily Kandinsky
              </blockquote>
              <p>
                Add statement earrings, color-pop heels, or even a bright handbag. Don’t forget to balance it — too many loud shades can compete. Keep makeup minimal and let your outfit speak for itself. Glow Mode isn’t about perfection — it’s about presence.
              </p>
            </div>

            <div className="single_categoris_bottom">
              <ul>
                <li><a href="#!">GlowMode</a></li>
                <li><a href="#!">BrightColors</a></li>
                <li><a href="#!">MoodFashion</a></li>
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
                  <a href="#!" className="mb-1 d-inline-block">Tanya Desai</a>
                </h6>
                <p>
                  Tanya is a color theory enthusiast and senior fashion writer at FashionHive. She loves decoding color psychology and guiding people to embrace bold fashion without fear.
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

export default BlogSingleContentTwo