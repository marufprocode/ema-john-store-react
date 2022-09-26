import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Products from '../products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(productsData => setProducts(productsData));
    }, [])

    const handleAddCart = product => {
        const newCart = [...cartItem, product];
        setCartItem(newCart);
    }
    return (
        <div className='shop'>
          <div className="products-container">
            {
                products.map(product => <Products data={product} key={product.id} handleAddCart={handleAddCart} ></Products>)
            }
          </div>
          <div className="order-list">
            <Cart cartItem={cartItem}></Cart>
            </div>  
        </div>
    );
};

export default Shop;<h1>All Products</h1>