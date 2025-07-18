import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import Layout from '../../component/MyAccountDashboard/Layout'
import Download from '../../component/MyAccountDashboard/Download'
import Footer from '../../component/Common/Footer'
const CustomerDownloads = () => {
    return (
        <>
            <Header />
            <Banner title="Customer Dashboard" />
            <Layout>
                <Download />
            </Layout>
            <Footer />
        </>
    )
}

export default CustomerDownloads
