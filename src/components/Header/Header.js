import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="logo" />
                <div>
                    <a href="www.google.com" target="_blank">Shop</a>
                    <a href="www.google.com" target="_blank">Order</a>
                    <a href="www.google.com" target="_blank">Inventory</a>
                    <a href="www.google.com" target="_blank">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;