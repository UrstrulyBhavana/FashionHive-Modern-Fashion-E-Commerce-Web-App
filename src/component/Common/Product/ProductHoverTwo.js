import React from 'react'
import ProductCard from '../Product/ProductCard';

import { useSelector } from "react-redux";

const ProductHoverTwo = () => {
    let products = useSelector((state) => state.products.products);
    return (
        <>
            <section className="product_hover_Widget ptb-100 bg-maroon-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product_hover_heading">
                                <h2>Product Hover Two</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        { products.slice(4, 8).map((data, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                <ProductCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductHoverTwo


