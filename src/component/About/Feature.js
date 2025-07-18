import React from 'react'
import img1 from '../../assets/img/icon/icon_about1.jpg'
import img2 from '../../assets/img/icon/icon_about2.jpg'
import img3 from '../../assets/img/icon/icon_about3.jpg'
import img4 from '../../assets/img/icon/icon_about4.jpg'

const FeatureData = [
    {
        img: img1,
        title: "Style That Speaks",
        para: `Create expressive looks with our curated fashion collections crafted to help you stand out.`
    },
    {
        img: img2,
        title: "Home That Inspires",
        para: `Discover modern furniture and decor that transforms your space into a statement.`
    },
    {
        img: img3,
        title: "Seamless Shopping",
        para: `From intuitive filtering to personalized recommendations enjoy effortless browsing.`
    },
    {
        img: img4,
        title: "Instant Preview",
        para: `Visualize product combinations with real-time previews before your purchase.`
    }
]

const Feature = () => {
    return (
        <>
            <section id="service_promo_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        {FeatureData.map((data, index) => (
                            <div className="col-lg-3 col-sm-6 col-12" key={index}>
                                <div className="service_promo_single_item">
                                    <div className="service_prom_image">
                                        <img src={data.img} alt={data.title} />
                                    </div>
                                    <div className="service_prom_content">
                                        <h3>{data.title}</h3>
                                        <p>{data.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
