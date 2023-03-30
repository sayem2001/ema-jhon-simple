import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, price, seller, ratings, name } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Prise: ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating :{ratings}stars </p>
            </div>
            <button onClick={() => props.handelAddCart(props.product)} className='btn-cart'>add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;