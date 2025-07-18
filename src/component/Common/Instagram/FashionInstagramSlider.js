import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { InstgramDataFashion } from './InstgramDataFashion'
import Heading from '../../Fashion/Heading';

const FashionInstagramSlider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section id="instagram_area_one" style={{ marginTop: "30px" }}>
      <div className="container-fluid mb-15">
        <Heading
          heading="Follow Us on Instagram"
          para="Join us on Instagram for style updates and exclusive content!"
        />
        <div className="row">
          <div className="col-lg-12">
            <div className="instagram_post_slider">
              <Slider {...settings}>
                {InstgramDataFashion.map((data, index) => (
                  <div className="instgram_post" key={index}>
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className={data.icon}></i>
                      <img src={data.img} alt="insta-img" />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FashionInstagramSlider;
