import React from 'react';

import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/vmSleeX.png'

const Footer = () => {
    return (
        <div className='footer' style={{backgroundImage: `url(${bg})`}}>
            <div className='footer__content container'>
                <div className='footer__content__logo'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <Link to="/">VM SleeX</Link>
                    </div>
                </div>
                <div className='footer__content__menus'>
                    <div className='footer__content__menus__menu'>
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Terms of and Conditions</Link>
                        <Link to="/">About us</Link>
                    </div>

                    <div className='footer__content__menus__menu'>
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pivacy Policy</Link>
                    </div>

                    <div className='footer__content__menus__menu'>
                        <Link to="/">Hot Trend</Link>
                        <Link to="/">Blog Articles</Link>
                        <Link to="/">Join</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
