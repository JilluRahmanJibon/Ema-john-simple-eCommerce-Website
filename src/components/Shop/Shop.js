import { faArrowRightLong, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const asyncWayDataLoad = async () => {
        const url = 'products.json';
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data)
    }
    useEffect(() => {
        asyncWayDataLoad()
    }, [])

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2 className='order-summay'>Product Summary</h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${ }</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h4>Grand Total: $</h4>
                <div className='clear-review-btn'>
                    <button className='clear-cart'><p>Clear Cart <FontAwesomeIcon className='icon-clear-or-revie' icon={faTrashCan}></FontAwesomeIcon> </p></button>
                    <button className='review-order'><p>Review Order <FontAwesomeIcon className='icon-clear-or-revie' icon={faArrowRightLong}></FontAwesomeIcon></p></button>
                </div>
            </div>

        </div>
    );
};

export default Shop;