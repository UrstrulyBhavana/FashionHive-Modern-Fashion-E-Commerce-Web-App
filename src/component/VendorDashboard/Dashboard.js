import React from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Dashboard = () => {

    let products = useSelector((state) => state.products.products);
    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="vendor_top_box">
                        <h2>{products.length}</h2>
                        <h4>Total Products</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="vendor_top_box">
                        <h2>2552</h2>
                        <h4>Total Sales</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="vendor_top_box">
                        <h2>50</h2>
                        <h4>Order Pending</h4>
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
                        <h4>Pending Products</h4>
                        <table className="table pending_table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.slice(1, 5).map((data, index)=>(
                                    <tr key={index}>
                                     <td><Link to={ `/product-details-one/${data.id}`}><img width="52px" src={data.img} alt={data.title} /></Link></td>
                                     <td><Link to={ `/product-details-one/${data.id}`}>{data.title}</Link></td>
                                     <td>${data.price}</td>
                                     <td>{parseInt(data.price)*3}</td>
                                    </tr>
                                ))}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="vendor_order_boxed pt-4">
                        <h4>Recent Orders</h4>
                        <table className="table pending_table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78153</Link></td>
                                    <td>Belted Trench Coat</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78154</Link></td>
                                    <td>Neck Velvet Dress</td>
                                    <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78155</Link></td>
                                    <td>T-Shirt For Woman</td>
                                    <td><span className="badge badge-success">Confirmed</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78156</Link></td>
                                    <td>Fit-Flare Dress</td>
                                    <td><span className="badge badge-danger">Canceled</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78157</Link></td>
                                    <td>Long-Shirt For Men</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78158</Link></td>
                                    <td>Saree for women</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78159</Link></td>
                                    <td>Handbag for Girls</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

