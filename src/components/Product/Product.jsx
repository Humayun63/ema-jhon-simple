import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='single-product'>
            <img src={img} alt="Product Image" />
            <h2 className='product-name'>{name}</h2>
            <p className='product-price'>Price: ${price}</p>
            <div className="product-info">
                <p className='manufacturer'>Manufacturer: {seller}</p>
                <p className='rating'>Raging: {ratings} star</p>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;