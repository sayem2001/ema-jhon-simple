import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb } from '../../utilities/fakedb';


const Shop = () => {
    const[products,setProduct]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProduct(data))
    },[])
    const [cart,setCart] = useState([])

    const handelAddCart=(product)=>{
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {products.map(product => <Product
                key={product.id}
                product ={product}
                handelAddCart = {handelAddCart}
                ></Product>)}
            </div>
            <div className='cart-container'>
            <Cart
            cart = {cart}
            ></Cart>
            </div>
        </div>
    );
};

export default Shop;