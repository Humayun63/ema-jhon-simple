import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import CartDetailsCard from '../CartDetailsCard/CartDetailsCard';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const deleteItem = (id) => {
        const remainingCart = cart.filter(pd => pd.id !== id);
        setCart(remainingCart);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='cards-container'>
                {
                    cart.map(card => (
                        <CartDetailsCard
                            key={card.id}
                            card={card}
                            deleteItem={deleteItem}
                        />
                    ))
                }
            </div>
            <div className='sidebar-container'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to='/checkout' className='link'>
                        <button className='cart-btn'>
                            <span>Proceed Checkout</span>
                            <FontAwesomeIcon icon={faMoneyBill} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;