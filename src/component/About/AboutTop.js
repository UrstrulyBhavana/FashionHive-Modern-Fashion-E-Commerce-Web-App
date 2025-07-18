import React from 'react'
import img1 from '../../assets/img/common/img-about.jpg'

const AboutTop = () => {
    return (
        <>
            <section id="about-top" className="ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12  col-12">
                            <div className="about_top_img">
                                <img src={img1} alt="FashionHive about us" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_left_content">
                                <h2>ABOUT FASHIONHIVE</h2>
                                <h4>Where personal style meets modern living.</h4>
                                <p><strong style={{color:"#670D2F", fontSize:"18px"}}>FashionHive</strong> is a trend-forward eCommerce platform dedicated to redefining fashion and home décor. Our collections cater to fashion lovers and interior enthusiasts with curated designs that are bold, expressive, and timeless.</p>
                                <p>We specialize in women's and men's fashion, kidswear, and chic furniture pieces all thoughtfully crafted to help you express yourself through what you wear and how you live.</p>
                                <p><strong style={{color:"#670D2F", fontSize:"18px"}}>Founded in 2025</strong>, FashionHive blends aesthetics with functionality, making stylish living accessible to everyone. Our mission is to help you stand out — whether it's through your wardrobe or your space.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTop



    
                        
                        
                  