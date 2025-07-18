import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import Layout from '../../component/MyAccountDashboard/Layout'
import AccountDetails from '../../component/MyAccountDashboard/AccountDetails'
import Footer from '../../component/Common/Footer'
const CustomerAccountDetails = () => {
    return (
        <>
             <Header />
            <Banner title="Customer Dashboard" />
            <Layout>
                <AccountDetails />
            </Layout>
            <Footer />
        </>
    )
}

export default CustomerAccountDetails
