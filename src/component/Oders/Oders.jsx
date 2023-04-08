import React from 'react';
import Cart from '../Cart/Cart';

const Orders = () => {
    return (
        <div className='shop-container'>
        <div className='product-container'>
            
        </div>
        <div className='cart-container'>
        <Cart
        cart = {[]}
        ></Cart>
        </div>     
        </div>
    );
};

export default Orders;