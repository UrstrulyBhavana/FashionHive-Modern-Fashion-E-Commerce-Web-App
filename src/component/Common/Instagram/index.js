import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { InstgramData } from './InstgramData';
import Heading from '../../Furniture/Heading'
import HeadingTwo from '../../Fashion/Heading'

const InstgramSlider = (props) => {
  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }

    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
 
   
  const dataToShow = props.data || InstgramData;

  return (
    <>
      {props.container ? (
        <section id="instagram_area_one" >
          <div className="container">
            <Heading heading="FOLLOW US INSTAGRAM" />
            <div className="row">
              <div className="col-lg-12">
                <div className="instagram_post_slider">
                  <Slider {...settings}>
                    {dataToShow.map((data, index) => (
                      <div className="instgram_post" key={index}>
                        <a href="#!">
                          <i className={data.icon}></i>
                          <img src={data.img} alt="img" />
                        </a>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (

        <section id="instagram_area_one">
          <div className="container-fluid">
            <HeadingTwo heading="Follow Us Instagram" para="Follow Us and get updated from our instagram" />
            <div className="row">
              <div className="col-lg-12">
                <div className="instagram_post_slider">
                  <Slider {...settings}>
                    {dataToShow.map((data, index) => (
                      <div className="instgram_post" key={index}>
                        <a href="#!">
                          <i className={data.icon}></i>
                          <img src={data.img} alt="img" />
                        </a>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

    </>
  )
}

export default InstgramSlider