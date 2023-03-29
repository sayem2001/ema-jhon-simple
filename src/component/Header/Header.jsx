import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="">order</a>
                <a href="">order review</a>
                <a href="">marchendiz</a>
                <a href="">log in</a>
            </div>
        </div>
    );
};

export default Header;