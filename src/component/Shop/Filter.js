import React from 'react'
import { Link } from 'react-router-dom'
const Filter = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="product_filter">
                        <div className="customs_selects">
                            <select name="product" className="customs_sel_box" onChange={() => { props.filterEvent(1) }}>
                                <option value="volvo">Most Popular</option>
                                <option value="saab">Best Seller</option>
                                <option value="mercedes">Trending</option>
                                <option value="audi">Featured</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="product_shot">
                        <div className="product_shot_title">
                            <p>Sort By:</p>
                        </div>
                        <div className="customs_selects">
                            <select name="product" className="customs_sel_box" onChange={() => { props.filterEvent(1) }}>
                                <option value="Popularity">Sort By Popularity</option>
                                <option value="newness">Sort By Newness</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>
                        <div className="product_shot_view">
                            <ul>
                                <li><Link to="/shopList"><i className="fa fa-list"></i></Link></li>
                                <li><Link to="/shopTwo"><i className="fa fa-th-large"></i></Link></li>
                                <li><Link to="/shop"><i className="fa fa-th"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter
