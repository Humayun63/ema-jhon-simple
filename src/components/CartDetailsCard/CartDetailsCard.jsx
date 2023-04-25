import React from 'react';
import './CartDetailsCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartDetailsCard = ({ card, deleteItem }) => {
    const { id, img, name, price, shipping } = card
    return (
        <div className='single-card'>
            <img src={img} alt="Products Image" />
            <div className="cart-details">
                <h3>{name}</h3>
                <p>Price: <span className="text-orange">${price}</span></p>
                <p>Shipping Charge: <span className="text-orange">${shipping}</span></p>
            </div>
            <button className='delete-btn' onClick={() => deleteItem(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default CartDetailsCard;