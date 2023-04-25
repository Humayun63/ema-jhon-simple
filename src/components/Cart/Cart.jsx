import React, { Children } from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, clearCart, children}) => {
    let priceTotal = 0;
    let shippingTotal = 0;
    let quantity = 0;
    for (const product of cart) {
        if(product.quantity === 0){
            product.quantity = 1;
        }
        priceTotal = priceTotal + product.price * product.quantity;
        shippingTotal += product.shipping;
        quantity += product.quantity;
    }
    let tax = priceTotal*0.07;
    let gradTotal = priceTotal + shippingTotal + tax;
    return (
        <div className='cart-container'>
           <h2>Order Summary</h2>
           <p>Selected Items:{quantity} </p> 
           <p>Total Price: ${priceTotal} </p> 
           <p>Total Shipping Charge: ${shippingTotal} </p> 
           <p>Tax: ${tax.toFixed(2)} </p> 
           <h3>Grand Total: ${gradTotal}</h3>
           <button className='clear-cart-btn' onClick={clearCart}>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children} 
        </div>
    );
};

export default Cart;