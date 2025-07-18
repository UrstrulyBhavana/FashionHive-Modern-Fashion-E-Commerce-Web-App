import React from 'react'
import Header from '../../component/Common/Header'
import Layout from '../../component/VendorDashboard/Layout'
import Banner from '../../component/Common/Banner'
import AddProduct from '../../component/VendorDashboard/AddProduct'
import Footer from '../../component/Common/Footer'
const AddProducts = () => {
    return (
        <>
            <Header />
            <Banner title="Vendor" />
            <Layout>
             <AddProduct/>
             </Layout>
            <Footer />
        </>
    )
}

export default AddProducts