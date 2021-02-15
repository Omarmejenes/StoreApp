import React from 'react';
import '../styles/components/Header.scss';

const Header = () => {
    return (
        <div className='Header'>
            <h1 className='Header-title'>StoreApp</h1>
            <div className='Header-checkout'>
                Checkout
            </div>
        </div>
    );
};

export default Header;
