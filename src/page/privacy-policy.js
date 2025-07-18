import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Common/Banner'
import PrivacyPolicyArea from '../component/PrivacyPolicy'
import Footer from '../component/Common/Footer'

const PrivacyPolicy = () => {
  
  return (
    <>
      <Header />
      <Banner title="Privacy Policy" />
      <PrivacyPolicyArea />
      <Footer />
    </>
  )
}

export default PrivacyPolicy