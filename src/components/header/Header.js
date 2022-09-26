import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="./order">Order</a></li>
                <li><a href="./OrderReview">Order Review</a></li>
                <li><a href="./Inventory">Manage Inventory</a></li>
                <li><a href="./Login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;