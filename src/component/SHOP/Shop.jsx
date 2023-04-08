import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { getItem } from 'localforage';


const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []
        for (const id in storedCart) {
            const saveCart = products.find(product => product.id == id)
            if (saveCart) {
                const quantity = storedCart[id]
                saveCart.quantity = quantity
            }
            savedCart.push(saveCart)
            console.log(saveCart)
            setCart(savedCart)

        }
    }, [products])
    

    const handelAddCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handelAddCart={handelAddCart}
                ></Product>)}
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;