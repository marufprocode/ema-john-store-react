import React from 'react';

const Cart = ({cartItem}) => {
    return (
        <div>
            <h3>Order Summary: </h3>
            <h4>Order Items: {cartItem.length}</h4>
        </div>
    );
};

export default Cart;