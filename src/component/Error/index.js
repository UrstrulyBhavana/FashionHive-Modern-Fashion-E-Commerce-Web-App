import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ErrorArea = () => {
    
const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        Swal.fire('Search Error', 'No results found.', 'warning');
        setSearchText("")
    };

    return (
        <section id="error_area" className="ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="error_wrapper">
                            <h1>
                                <i className="fa fa-exclamation-triangle text-warning me-2"></i>
                                404
                            </h1>
                            <h3>We are sorry, the page you've requested is not available</h3>

                            <form onSubmit={handleSearch}>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search something else..."
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="btn btn-dark">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>

                            <Link to="/" className="theme-btn-one btn-black-overlay btn_md mt-3">
                                Back To Home Page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorArea;

