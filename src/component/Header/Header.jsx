import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">order review</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/login">log in</Link>
            </div>
        </div>
    );
};

export default Header;