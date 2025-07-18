import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ContactArea from '../../component/ContactOne'
import Footer from '../../component/Common/Footer'
const ContactOne = () => {
    return (
        <>
            <Header />
            <Banner title="Contact" />
            <ContactArea />
            <Footer />
        </>
    )
}

export default ContactOne