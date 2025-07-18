import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import CartViewThree from '../../component/Cart/CartViewThree'
import Footer from '../../component/Common/Footer'
const CartThree = () => {
    return (
        <>
            <Header />
            <Banner title="Cart" />
            <CartViewThree />
            <Footer />
        </>
    )
}

export default CartThree