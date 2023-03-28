import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let priceTotal = 0;
    let shippingTotal = 0;
    for (const product of cart) {
        priceTotal = priceTotal + product.price;
        shippingTotal += product.shipping;
    }
    let tax = priceTotal*0.07;
    let gradTotal = priceTotal + shippingTotal + tax;
    return (
        <div className='cart-container'>
           <h2>Order Summary</h2>
           <p>Selected Items:{cart.length} </p> 
           <p>Total Price: ${priceTotal} </p> 
           <p>Total Shipping Charge: ${shippingTotal} </p> 
           <p>Tax: ${tax.toFixed(2)} </p> 
           <h3>Grand Total: ${gradTotal}</h3> 
        </div>
    );
};

export default Cart;