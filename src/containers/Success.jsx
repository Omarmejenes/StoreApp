import React from 'react';
import '../styles/components/Success.scss';

const Success = () => {
    return (
        <div className='Success'>
            <div className='Success-content'>
                <h2>Gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 días a tu direccion:</span>
                <div className='Success-map'>
                    Google Maps
                </div>
            </div>
        </div>
    );
};

export default Success;
