import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0
    let totalShipping = 0
    for (const product of cart){
        total = total+ product.price
        totalShipping = totalShipping + product.shipping
        
    }
    let tex = total*7/100
    const grandTotal = total+totalShipping+tex
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected item: {cart.length}</p>
            <p>Total price : ${total} </p>
            <p> shipping : ${totalShipping} </p>
            <p>Tex : $ {tex} </p>
            <h6>Grand Total : $ {grandTotal.toFixed(2)} </h6>

        </div>
    );
};

export default Cart;