import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'


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
            <div className='order-container'>
            order summery
            <p>{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;