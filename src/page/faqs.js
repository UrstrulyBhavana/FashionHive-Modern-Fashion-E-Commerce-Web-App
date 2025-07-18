import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Common/Banner'
import FaqsArea from '../component/Faqs'
import Footer from '../component/Common/Footer'

const Faqs = () => {
    return (
        <>
            <Header />
            <Banner title="Faqs" />
            <FaqsArea />
            <Footer />
        </>
    )
}

export default Faqs