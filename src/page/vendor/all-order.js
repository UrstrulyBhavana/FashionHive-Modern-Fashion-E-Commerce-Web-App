import React from 'react'
import Header from '../../component/Common/Header'
import Layout from '../../component/VendorDashboard/Layout'
import AllOrder from '../../component/VendorDashboard/AllOrder'
import Banner from '../../component/Common/Banner'
import Footer from '../../component/Common/Footer'

const AllOrders = () => {
    return (
        <>
            <Header />
            <Banner title="Vendor" />
            <Layout>
                <AllOrder />
            </Layout>
            <Footer />
        </>
    )
}

export default AllOrders
