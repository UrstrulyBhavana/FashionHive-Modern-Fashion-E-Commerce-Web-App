import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Banner = () => {
    let settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            }
       
          },
           {
            breakpoint: 600, 
            settings: {
              slidesToShow: 1,
            }
          },
           {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
    return (
        <>
    <section id="furniture_banner">
      <div className="furniture_slider_box">
      <Slider {...settings}>
        <div className="furniture_slider background_bg bg_1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                <div className="furniture_slider_content">
                  <h5>NEW ARRIVAL</h5>
                  <h2>Minimalist Sofa Designs</h2>
                  <p>Discover modern comfort and timeless elegance with our curated collection of minimalist sofas, perfect for every living space.</p>
                  <Link to="/shop" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="furniture_slider background_bg bg_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="furniture_slider_content">
                  <h5>EDITOR'S PICK</h5>
                  <h2>Comfort Meets Style</h2>
                  <p>Elevate your home with furniture that's as stylish as it is functional. Crafted for comfort. Designed to impress.</p>
                  <Link to="/shop" className="theme-btn-one bg-black btn_sm">Explore</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="furniture_slider background_bg bg_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="furniture_slider_content">
                  <h5>FURNITURE SALE</h5>
                  <h2>Modern Living Essentials</h2>
                  <p>From cozy reading chairs to sleek side tables — discover key pieces that define today’s modern home interiors.</p>
                  <Link to="/shop" className="theme-btn-one bg-black btn_sm">Browse Collection</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    </section>
        </>
    )
}

export default Banner

