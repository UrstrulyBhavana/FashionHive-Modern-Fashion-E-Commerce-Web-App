import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const AllProduct = () => {
    
  const allProducts = useSelector((state) => state.products.products);

  const filteredProducts = allProducts.filter(product =>
    product.category?.toLowerCase() === 'fashion' || product.category?.toLowerCase() === 'furniture'
  );

  const ITEMS_PER_PAGE = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleDelete = (id) => {
    alert(`Product with ID ${id} will be deleted!`);
  };
  

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="vendor_order_boxed pt-4">
          <div className="mb-2 d-flex justify-content-between align-items-center">
            <h4 className="mb-0">All Products</h4>
            <Link to="/vendor/add-products" className="theme-btn-one bg-black btn_sm">
              Add Product
            </Link>
          </div>

          <div className="table-responsive">
            <table className="table pending_table">
              <thead className="thead-light">
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Sales</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {paginatedProducts.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/product-details-one/${data.id}`}>
                        <img width="70px" src={data.img} alt={data.title} />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/product-details-one/${data.id}`}>{data.title}</Link>
                    </td>
                    <td>{data.category}</td>
                    <td>${data.price}</td>
                    <td>{parseInt(data.price) * 2}</td>
                    <td>{parseInt(data.price) * 3}</td>
                    <td>
                      <Link to="/vendor/add-products" className="text-primary me-2">
                        <i className="fa fa-edit"></i>
                      </Link>
                      <button className="btn btn-sm btn-danger" title="Delete" onClick={() => handleDelete(data.id)}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-lg-12 mt-3">
            <ul className="pagination justify-content-center">
              <li className="page-item" onClick={() => handlePageChange(page - 1)}>
                <a className="page-link" href="#!" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, idx) => (
                <li
                  key={idx + 1}
                  className={`page-item ${page === idx + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(idx + 1)}
                >
                  <a className="page-link" href="#!">{idx + 1}</a>
                </li>
              ))}
              <li className="page-item" onClick={() => handlePageChange(page + 1)}>
                <a className="page-link" href="#!" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllProduct;


