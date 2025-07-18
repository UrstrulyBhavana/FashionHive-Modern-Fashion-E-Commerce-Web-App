import React from 'react';
import BarChart from '../VendorDashboard/BarChart';
import LineChart from '../VendorDashboard/LineChart';
import { Link } from 'react-router-dom';

const getBadgeClass = (status) => {
    switch (status) {
        case "Shipped": return "info";
        case "Pending": return "warning";
        case "Confirmed": return "success";
        case "Canceled": return "danger";
        default: return "secondary";
    }
};

const DashBoard = () => {
    const orders = [
        { id: "#78153", product: "Belted Trench Coat", price: 72, status: "Shipped" },
        { id: "#78154", product: "Neck Velvet Dress", price: 45, status: "Pending" },
        { id: "#78155", product: "T-Shirt For Woman", price: 38, status: "Confirmed" },
        { id: "#78156", product: "Fit-Flare Dress", price: 50, status: "Canceled" },
        { id: "#78157", product: "Long-Shirt For Men", price: 60, status: "Shipped" },
        { id: "#78160", product: "Casual Midi Dress", price: 55, status: "Pending" },
        { id: "#78161", product: "Elegant Saree", price: 89, status: "Pending" },
    ];

    const totalOrders = orders.length;
    const delivered = orders.filter(o => o.status === "Shipped").length;
    const pending = orders.filter(o => o.status === "Pending").length;

    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="vendor_top_box pt-4">
                        <h2>{totalOrders}</h2>
                        <h4>Total Orders</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="vendor_top_box">
                        <h2>{delivered}</h2>
                        <h4>Delivered Orders</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="vendor_top_box">
                        <h2>{pending}</h2>
                        <h4>Pending Orders</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="mychart_area">
                        <LineChart />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mychart_area">
                        <BarChart />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="vendor_order_boxed pt-4">
                        <h4>Pending Orders</h4>
                        <table className="table pending_table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.filter(o => o.status === "Pending").map((order, idx) => (
                                    <tr key={idx}>
                                        <td><Link to="/invoice-one" className="text-primary">{order.id}</Link></td>
                                        <td>{order.product}</td>
                                        <td>${order.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="vendor_order_boxed pt-4">
                        <h4>All Orders</h4>
                        <table className="table pending_table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Product Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, idx) => (
                                    <tr key={idx}>
                                        <td><Link to="/invoice-one" className="text-primary">{order.id}</Link></td>
                                        <td>{order.product}</td>
                                        <td>
                                            <span className={`badge badge-${getBadgeClass(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoard;
