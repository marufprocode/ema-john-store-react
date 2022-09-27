import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Products from '../products/Products';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(productsData => setProducts(productsData));
    }, [])

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product =>product.id === id);
            if(addedProduct){
                addedProduct.quantity = storedCart[id];
                savedCart.push(addedProduct);
            }
        }
        setCartItem(savedCart);
    }, [products])

    const handleAddCart = product => {
        let newCart = [];
        const exits = cartItem.find(item => item.id === product.id);
        if (!exits){
            product.quantity= 1;
            newCart = [...cartItem, product];
        }
        else{
            const rest = cartItem.filter(item => item.id !== product.id);
            exits.quantity = exits.quantity+1; 
            newCart = [...rest, exits]; 
        }
        setCartItem(newCart);
        addToDb(product.id);
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