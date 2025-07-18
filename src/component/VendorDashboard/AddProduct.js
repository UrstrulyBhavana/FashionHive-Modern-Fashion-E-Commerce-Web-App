import React from 'react'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import img1 from '../../assets/img/product-image/product1.png'

const AddProduct = () => {

    const history = useHistory();
    return (
        <>
            <section id="add_product_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="add_product_wrapper">
                                <h4>Add New Product</h4>

                                <form
                                  className="add_product_form" 
                                  onSubmit={(e)=> { 
                                   e.preventDefault();
                                   Swal.fire('Success','Product Successfully Added', 'success');
                                   history.push('/shop')
                                  }}
                                >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="image-input">
                                                <img src={img1} className="image-preview"
                                                    alt="preview" />
                                                <input type="file" accept="image/*" id="imageInput" />
                                                <label htmlFor="imageInput" className="image-button">
                                                    <i className="fa fa-image"></i>Choose image</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_name">Product Name<span className="text-danger">*</span></label>
                                                <input type="text" id="product_name" className="form-control"
                                                    placeholder="Enter product title" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_price">Product Price<span className="text-danger">*</span></label>
                                                <input type="number" id="product_price" className="form-control" placeholder="Enter product price" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_unit">Product Unit<span className="text-danger">*</span></label>
                                                <select name="product" id="product_unit" className="form-control" required>
                                                    <option value="Trending">Trending</option>
                                                    <option value="Best Seller">Best Seller</option>
                                                    <option value="Featured">Featured</option>
                                                    <option value="New Arrival">New Arrival</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_available">Product Available From <span className="text-danger">*</span></label>
                                                <input type="date" id="product_available" className="form-control" required/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="estimate_available">Estimate Available For (Days) <span className="text-danger">*</span></label>
                                                <input type="number" id="estimate_available" className="form-control"
                                                    placeholder="Eg: 10" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="available_stock">Available Stock (Quantity) <span className="text-danger">*</span></label>
                                                <input type="number" id="available_stock" className="form-control" placeholder="Eg: 100" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="whole_sale">Whole Sale Support <span className="text-danger">*</span></label>
                                                <select name="product" id="whole_sale"  className="form-control" required>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="flash_sale">Flash Sale Support <span className="text-danger">*</span></label>
                                                <select name="product" id="flash_sale"  className="form-control" required>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="frequency_support">Frequency Support <span className="text-danger">*</span></label>
                                                <select name="product" id="frequency_support"  className="form-control" required>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="btn_right_table">
                                                <button className="theme-btn-one bg-black btn_sm" type="submit">Add Product</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProduct
