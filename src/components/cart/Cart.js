import React from 'react';
import './Cart.css'

const Cart = ({cartItem}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const item of cartItem) {
        quantity = quantity + item.quantity;
        total = total+ item.price * item.quantity;
        shipping = shipping+item.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    const grandTotal = total+shipping+parseFloat(tax);
    return (
        <div className='cart-details'>
            <h3>Order Summary </h3>
            <h4>Order Items: {quantity}</h4>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax} </p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;