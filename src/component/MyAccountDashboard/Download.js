import React from 'react'
import pdf from '../../app/data/fashionhive-invoice.pdf'

const Download = () => {
    return (
        <>
            <div className="myaccount-content">
                <h4 className="title">Download Invoices </h4>
                <div className="table_page table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Ordered</th>
                                <th>Status</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Black T-Shirt For Woman</td>
                                <td>May 10, 2025</td>
                                <td><span className="badge badge-success">Paid</span></td>
                                <td><a href={pdf} className="view"  target="_blank" rel="noopener noreferrer" download>Click Here To Download Your Invoice</a></td>
                            </tr>
                            <tr>
                                <td>Maxi Dress</td>
                                <td>Mar 11, 2025</td>
                                <td> <span className="badge badge-success">Paid</span> </td>
                                <td><a href={pdf} className="view"  target="_blank" rel="noopener noreferrer" download >Click Here To Download Your Invoice</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Download

    