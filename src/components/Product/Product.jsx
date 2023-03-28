import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
            <button onClick={()=> props.handleAddToCard(props.product)}>
                Add to Cart 
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;