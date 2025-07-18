import React from 'react'
import Header from '../../component/Common/Header'
import Layout from '../../component/VendorDashboard/Layout'
import AllProduct from '../../component/VendorDashboard/AllProduct'
import Banner from '../../component/Common/Banner'
import Footer from '../../component/Common/Footer'
const AllProducts = () => {
    return (
        <>
             <Header />
            <Banner title="Vendor" />
            <Layout>
             <AllProduct/>
             </Layout>
            <Footer />
        </>
    )
}

export default AllProducts
