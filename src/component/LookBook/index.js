import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/img/common/lookbook.jpg";       
import img2 from "../../assets/img/product-image/product2.png"; 
import img4 from "../../assets/img/common/lookbook2.jpg";       
import img5 from "../../assets/img/product-image/product8.png"; 
import img6 from "../../assets/img/product-image/product22.png"; 
import img7 from "../../assets/img/product-image/product21.png"; 

const LookBook = () => (
  <section id="lookbook_area" className="lookbook pt-100 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="lookbook-block">
            <div className="img-width">
              <img src={img1} className="img-fluid bg-img" alt="Lookbook 1" />
            </div>

            <div className="lookbook-dot dot-tshirt">
              <span className="plus-icon">+</span>
              <Link to="/product-details-one/8">
                <div className="dot-showbox">
                  <img src={img7} className="img-fluid" alt="Blazer" />
                  <div className="dot-info">
                    <h5 className="title">Weekend Vibes</h5>
                    <h5>200 $</h5>
                    <h6>details</h6>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lookbook-dot dot-jeans">
              <span className="plus-icon">+</span>
              <Link to="/product-details-one/5">
                <div className="dot-showbox">
                  <img src={img2} className="img-fluid" alt="Jeans" />
                  <div className="dot-info">
                    <h5 className="title">High-Waist Denim</h5>
                    <h5>520 $</h5>
                    <h6>details</h6>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="lookbook-block">
            <div className="img-width">
              <img src={img4} className="img-fluid bg-img" alt="Lookbook 2" />
            </div>

            <div className="lookbook-dot dot-skirt-left">
              <span className="plus-icon">+</span>
              <Link to="/product-details-one/2">
                <div className="dot-showbox">
                  <img src={img5} className="img-fluid" alt="Skirt" />
                  <div className="dot-info">
                    <h5 className="title">Flared Mini Skirt</h5>
                    <h5>100 $</h5>
                    <h6>details</h6>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lookbook-dot dot-skirt-right">
              <span className="plus-icon">+</span>
              <Link to="/product-details-one/3">
                <div className="dot-showbox">
                  <img src={img6} className="img-fluid" alt="Inner" />
                  <div className="dot-info">
                    <h5 className="title">Chic Cami Top</h5>
                    <h5>400 $</h5>
                    <h6>details</h6>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LookBook;
