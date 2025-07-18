import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import Layout from '../../component/MyAccountDashboard/Layout'
import Address from '../../component/MyAccountDashboard/Address'
import Footer from '../../component/Common/Footer'
const CustomerAddress = () => {
    return (
        <>
             <Header />
            <Banner title="Customer Dashboard" />
            <Layout>
                <Address />
            </Layout>
            <Footer />
        </>
    )
}

export default CustomerAddress
