import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Products = (props) => {
    const {handleAddCart, data} = props;
    const {img, name, price, ratings, seller} = data;
    return (
        <div className='product-card'>
            <img src={img} onError={(e)=>{
            e.target.setAttribute('src','https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg');
                }} alt="product-img"/>
            <div className="product-des">
                <h4>{name}</h4>
                <h6>Price: {price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={()=>handleAddCart(data)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} style={{marginLeft: '10px'}}></FontAwesomeIcon> 
            </button>
        </div>
    );
};

export default Products;