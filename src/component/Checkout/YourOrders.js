import React from 'react';

const YourOrders = () => {
    return (
        <>
            <div className="order_review box-shadow bg-white">
                <div className="check-heading">
                    <h3>Your Orders</h3>
                </div>
                <div className="table-responsive order_table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Navy Blue Evening Gown <span className="product-qty">x 2</span></td>
                                <td>$240.00</td>
                            </tr>
                            <tr>
                                <td>Gray Leather Tuxedo <span className="product-qty">x 1</span></td>
                                <td>$180.00</td>
                            </tr>
                            <tr>
                                <td>Full-Sleeve Maxi Dress <span className="product-qty">x 3</span></td>
                                <td>$270.00</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>SubTotal</th>
                                <td className="product-subtotal">$690.00</td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td>Free Shipping</td>
                            </tr>
                            <tr className="order_total">
                                <th>Total</th>
                                <td className="product-subtotal">$690.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
};

export default YourOrders;
