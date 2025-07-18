import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import Wishlist from '../../component/WishList'
import Footer from '../../component/Common/Footer'

const WishLists = () => {
    return (
        <>
            <Header />
            <Banner title="Wishlist" />
            <Wishlist />
            <Footer />
        </>
    )
}

export default WishLists