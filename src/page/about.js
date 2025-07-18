import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Common/Banner'
import AboutComponent from '../component/About'
import FashionInstagramSlider from '../component/Common/Instagram/FashionInstagramSlider';

import Footer from '../component/Common/Footer'
const About = () => {
    return (
        <>
            <Header />
            <Banner title="About" />
            <AboutComponent />
            <FashionInstagramSlider />
            <Footer />
        </>
    )
}

export default About