import React from 'react'
import SkillBar from 'react-skillbars';

const skills = [
    { type: "Fashion", level: 90 },
    { type: "Furniture", level: 85 },
    { type: "Support", level: 80 },
    { type: "Delivery", level: 75 }
];


const colors = {
    "bar": "#EAA64D",
    "title": {
        "text": "#fff",
        background:" var(--main-theme-color)"
    }
}

const Functionality = () => {
    return (
        <>
            <section id="about_progressbar" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_progressbar_content">
                                <h2>Where Style Meets Function</h2>
                                <p>At FashionHive, we go beyond trends — blending artistic vision with practical design. Whether it's the perfect outfit or the ideal furniture piece, our collections are designed to enhance your life beautifully and efficiently.</p>
                                <p>We take pride in innovation, curation, customer experience, and reliable logistics delivering style from screen to doorstep with care.We focus on quality, experience, and aesthetics bringing together utility and beauty across fashion and home living.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="custom-progress m-t-40">
                                <SkillBar skills={skills} height={40} colors={colors} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Functionality


