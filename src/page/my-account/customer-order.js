import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import Layout from '../../component/MyAccountDashboard/Layout'
import Order from '../../component/MyAccountDashboard/Order'
import Footer from '../../component/Common/Footer'
const CustomerOrder = () => {
    return (
        <>
            <Header />
            <Banner title="Customer Dashboard" />
            <Layout>
                <Order />
            </Layout>
            <Footer />
        </>
    )
}

export default CustomerOrder
