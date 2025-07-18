import React from 'react'
import Header from '../../component/Common/Header'
import Layout from '../../component/VendorDashboard/Layout'
import Setting from '../../component/VendorDashboard/Setting'
import Banner from '../../component/Common/Banner'
import Footer from '../../component/Common/Footer'
const VendorSetting = () => {
    return (
        <>
             <Header />
            <Banner title="Vendor" />
            <Layout>
             <Setting/>
             </Layout>
            <Footer />
        </>
    )
}

export default VendorSetting
