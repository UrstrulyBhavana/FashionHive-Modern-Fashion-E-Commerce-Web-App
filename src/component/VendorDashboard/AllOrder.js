import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllOrder = () => {

  const orders = [
    { id: "#78153", product: "Belted Trench Coat", status: "Shipped", badge: "info", price: "$50" },
    { id: "#78154", product: "Neck Velvet Dress", status: "Pending", badge: "warning", price: "$50" },
    { id: "#78155", product: "T-Shirt For Woman", status: "Confirmed", badge: "success", price: "$58" },
    { id: "#78156", product: "Fit-Flare Dress", status: "Canceled", badge: "danger", price: "$50" },
    { id: "#78157", product: "Long-Shirt For Men", status: "Shipped", badge: "info", price: "$50" },
    { id: "#78158", product: "Saree for Women", status: "Shipped", badge: "info", price: "$50" },
    { id: "#78159", product: "Handbag for Girls", status: "Shipped", badge: "info", price: "$50" },
  ];

  const ITEMS_PER_PAGE = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const paginatedOrders = orders.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="vendor_order_boxed">
          <h4>All Orders</h4>
          <div className="table-responsive">
            <table className="table pending_table">
              <thead className="thead-light">
                <tr>
                  <th>Order Id</th>
                  <th>Product Details</th>
                  <th>Status</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {paginatedOrders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <Link to="/invoice-one" className="text-primary">
                        {order.id}
                      </Link>
                    </td>
                    <td>{order.product}</td>
                    <td className="text-center">
                      <span className={`badge badge-${order.badge}`}>{order.status}</span>
                    </td>
                    <td>{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-lg-12 mt-3">
            <ul className="pagination justify-content-center">
              <li className="page-item" onClick={() => handlePageChange(page - 1)}>
                <button className="page-link" aria-label="Previous">«</button>
              </li>
              {Array.from({ length: totalPages }, (_, idx) => (
                <li
                  key={idx + 1}
                  className={`page-item ${page === idx + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(idx + 1)}
                >
                 <button className="page-link">{idx + 1}</button>
                </li>
              ))}
              <li className="page-item" onClick={() => handlePageChange(page + 1)}>
                <button className="page-link" aria-label="Next">»</button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllOrder;
