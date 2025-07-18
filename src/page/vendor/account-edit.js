import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import AccountDetailsEdit from '../../component/MyAccountDashboard/AccountDetailsEdit'
import Footer from '../../component/Common/Footer'
const AccountEdit = () => {
  return (
    <>
      <Header />
      <Banner title="Account Info Edit" />
      <AccountDetailsEdit />
      <Footer />
    </>
  )
}

export default AccountEdit