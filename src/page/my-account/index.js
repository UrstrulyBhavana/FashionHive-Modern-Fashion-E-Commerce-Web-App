import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import Layout from '../../component/MyAccountDashboard/Layout'
import Dashboard from '../../component/MyAccountDashboard/DashBoard'
import Footer from '../../component/Common/Footer'
const MyAccounts = () => {
    return (
        <>
            <Header />
            <Banner title="Customer Dashboard" />
            <Layout>
                <Dashboard />
            </Layout>
            <Footer />

        </>
    )
}

export default MyAccounts