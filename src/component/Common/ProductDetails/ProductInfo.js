import React from 'react'
import user1 from '../../../assets/img/user/user1.png'
import user2 from '../../../assets/img/user/user2.png'
import user3 from '../../../assets/img/user/user3.png'

const ReviewData = [
    {
        img: user1,
        name: "Anika Sharma",
        date: "2 days ago",
        replay: "Reply",
        report: "Report",
        para: `The shirt exceeded my expectations! The cotton fabric feels soft on the skin and is perfect for everyday wear. It’s comfortable, stylish, and has quickly become a staple in my wardrobe. I love pairing it with jeans for a casual look or layering it with a blazer for work. Totally worth the price. Will definitely shop more from FashionHive!`
    },
    {
        img: user2,
        name: "Meera Thomas",
        date: "5 days ago",
        replay: "Reply",
        report: "Report",
        para: `Loved the relaxed fit and the premium finish. The stitching is super clean, and the fabric doesn’t shrink or fade after washing. What really impressed me was how breathable and lightweight it feels, even on warm days. Highly recommend it for anyone who values comfort and quality.`
    },
    {
        img: user3,
        name: "Nisha Verma",
        date: "1 week ago",
        replay: "Reply",
        report: "Report",
        para: `Honestly one of the best wardrobe additions this season! The fit is very flattering, and the material feels luxurious against the skin. I've received so many compliments already. The packaging was neat, and delivery was prompt. Looking forward to buying more from FashionHive!`
    },

]

const ProductInfo = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product_details_tabs">
                        <ul className="nav nav-tabs">
                            <li><a data-toggle="tab" href="#description" className="active">Description</a></li>
                            <li><a data-toggle="tab" href="#additional">Additional Information</a></li>
                            <li><a data-toggle="tab" href="#review">Review</a></li>
                        </ul>
                        <div className="tab-content">
                            <div id="description" className="tab-pane fade in show active">
                                <div className="product_description">
                                    <p> This oversized cotton poplin shirt features a minimalist design with a crisp finish. It’s designed for effortless layering and maximum comfort throughout the day. Whether paired with jeans or styled under a blazer, it offers versatile wear for any occasion.</p>
                                    <ul>
                                        <li>Breathable fabric made for all-day comfort.</li>
                                        <li>Loose-fit tailoring for modern streetwear look.</li>
                                        <li>Machine washable, wrinkle-resistant finish.</li>
                                    </ul>
                                    <p>Our collection promotes sustainable fashion with timeless elegance. Each piece is ethically made and crafted to last, combining style with responsibility.</p>
                                </div>
                            </div>
                            <div id="additional" className="tab-pane fade">
                                <div className="product_additional">
                                    <ul>
                                        <li>Weight: <span>400 g</span></li>
                                        <li>Dimensions: <span>10 x 10 x 15 cm</span></li>
                                        <li>Materials: <span> 60% cotton, 40% polyester</span></li>
                                        <li>Other Info: <span>Made with eco-friendly materials in a fair-trade certified facility</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="review" className="tab-pane fade">
                                <div className="product_reviews">
                                    <ul>
                                        {ReviewData.map((data, index) => (
                                            <li className="media" key={index}>
                                                <div className="media-img">
                                                    <img src={data.img} alt="img" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="media-header">
                                                        <div className="media-name">
                                                            <h4>{data.name}</h4>
                                                            <p>{data.date}</p>
                                                        </div>
                                                        <div className="post-share">
                                                            <a href="#!" className="replay">{data.replay}</a>
                                                            <a href="#!" className="">{data.report}</a>
                                                        </div>
                                                    </div>
                                                    <div className="media-pragraph">
                                                        <div className="product_review_strat">
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                        </div>
                                                        <p>{data.para}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo;