import React from 'react'
import Header from '../../component/Common/Header'
import Dashboard from '../../component/VendorDashboard/Dashboard'
import Layout from '../../component/VendorDashboard/Layout'
import Banner from '../../component/Common/Banner'
import Footer from '../../component/Common/Footer'
const Vendor = () => {
    return (
        <>
            <Header />
            <Banner title="Vendor" />
            <Layout>
            <Dashboard />
            </Layout>
            <Footer />
        </>
    )
}

export default Vendor