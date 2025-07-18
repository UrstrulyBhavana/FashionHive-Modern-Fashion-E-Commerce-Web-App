import React from 'react'
import { Link , useHistory } from 'react-router-dom'
import insta1 from '../../assets/img/instagram/post1.png'
import insta2 from '../../assets/img/instagram/post2.png'
import insta3 from '../../assets/img/instagram/post3.png'
import insta4 from '../../assets/img/instagram/post4.png'
import insta5 from '../../assets/img/instagram/post5.png'
import insta6 from '../../assets/img/instagram/post6.png'
import insta7 from '../../assets/img/instagram/post7.png'
import insta8 from '../../assets/img/instagram/post8.png'
import insta9 from '../../assets/img/instagram/post9.png'
import insta10 from '../../assets/img/instagram/post10.png'
import insta11 from '../../assets/img/instagram/post11.png'
import insta12 from '../../assets/img/instagram/post12.png'

import post1 from '../../assets/img/blog/post11.png'
import post2 from '../../assets/img/blog/post12.png'
import post3 from '../../assets/img/blog/post13.png'

const InstagramData = [
  {
    img: insta1
  },
  {
    img: insta2
  },
  {
    img: insta3
  },
  {
    img: insta4
  },
  {
    img: insta5
  },
  {
    img: insta6
  },
  {
    img: insta7
  },
  {
    img: insta8
  },
  {
    img: insta9
  },
  {
    img: insta10
  },
  {
    img: insta11
  },
  {
    img: insta12
  },
]

const RecentPost = [
  {
    postImg: post1,
    title: "Effortless Street Style: Everyday Chic",
    date: "May 16, 2025"
  },
  {
    postImg: post2,
    title: "Glow Mode: Bright Colors, Brighter Mood",
    date: "May 16, 2025"
  },
  {
    postImg: post3,
    title: "Casual Fashion Tips That Always Work",
    date: "May 15, 2025"
  }
]

const BlogSideBar = () => {
  const history = useHistory()
  return (
    <>
      <div className="col-lg-3">
        <div className="left-sidebar shop-sidebar-wrap">
          <div className="sidebar-widget">
            <h3 className="sidebar-title mt-0">Search</h3>
            <div className="search-widget">
              <form onSubmit={(e)=> {e.preventDefault();history.push("/blog-list-view");}}>
                <div className="input-group">
                  <input className="form-control" placeholder="Search fashion blog..." type="text" required />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="sidebar-widget mt-40px">
            <h3 className="sidebar-title">Categories</h3>
            <div className="category-post">
              <ul>
                <li>
                  <a href="#!" className="selected">All <span>(20)</span> </a>
                </li>
                <li>
                  <a href="#!">Streetwear <span>(3)</span> </a>
                </li>
                <li>
                  <a href="#!">Glow Mode <span>(2)</span> </a>
                </li>
                <li>
                  <a href="#!">Minimal Fashion <span>(2)</span> </a>
                </li>
                <li>
                  <a href="#!">Everyday Looks <span>(2)</span> </a>
                </li>
                <li>
                  <a href="#!">Accessories  <span>(2)</span> </a>
                </li>
                <li>
                  <a href="#!">Furniture Fashion <span>(3)</span> </a>
                </li>
                <li>
                  <a href="#!">Table Styling <span>(2)</span> </a>
                </li>
                <li>
                  <a href="#!">Sofa Trends <span>(2)</span> </a>
                </li>
                <li>
                  <a href="#!">Decor & Ambience <span>(2)</span>  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="sidebar-widget mt-40px">
            <h3 className="sidebar-title">Recent Posts</h3>
            <div className="recent-post-widget">
              {RecentPost.map((data, index) => (
                <div className="recent-single-post d-flex" key={index}>
                  <div className="thumb-side img-zoom-hover">
                    <Link to="/blog-single-one"><img src={data.postImg} alt="img" /></Link>
                  </div>
                  <div className="media-side">
                    <h5>
                      <Link to="/blog-single-two">{data.title}</Link>
                    </h5>
                    <span className="date">{data.date}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div className="sidebar-widget mt-40px">
            <h3 className="sidebar-title">Tags</h3>
            <div className="sidebar-widget-tag d-inline-block">
              <ul>
                <li><a href="#!">StreetStyle</a></li>
                <li><a href="#!">FashionTips</a></li>
                <li><a href="#!">EverydayWear</a></li>
                <li><a href="#!">Trendy</a></li>
              </ul>
            </div>
          </div>
          <div className="sidebar-widget mt-40px">
            <h3 className="sidebar-title">Instagram Widget</h3>
            <div className="flicker-widget">
              <ul>
                {InstagramData.map((data, index) => (
                  <li className="img-zoom-hover" key={index}>
                    <a className="image-link" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img src={data.img} alt="instagram" /></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default BlogSideBar
