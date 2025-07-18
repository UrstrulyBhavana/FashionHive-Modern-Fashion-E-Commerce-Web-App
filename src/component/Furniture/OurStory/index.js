import React from 'react'
import { Link } from 'react-router-dom'

const OurStory = () => {
    return (
        <>
            <section id="furniture_story">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="our_story_content">
                                <h2>Our Story</h2>
                                <p>At FashionHive, we believe style is more than just fashion — it's expression.
                                    Born from a passion for bold elegance, our journey blends creativity, comfort,
                                    and individuality into every design.</p>
                                <Link to="/about" className="theme-btn-one bg-black btn_md">Read Full Story</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStory
