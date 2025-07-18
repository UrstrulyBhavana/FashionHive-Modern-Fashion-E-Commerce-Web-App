import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Common/Banner'
import RegisterArea from '../component/Register'
import Footer from '../component/Common/Footer'

const Register = () => {
    return (
        <>
            <Header />
            <Banner title="Register" />
            <RegisterArea />
            <Footer />
        </>
    )
}

export default Register