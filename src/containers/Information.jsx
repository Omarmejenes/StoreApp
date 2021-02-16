import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.scss';

const Information = () => {
    const { state, addToBuyer } = useContext(AppContext);
    const form = useRef(null);
    const history = useHistory();
    const { cart } = state;

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'postalcode': formData.get('postalcode'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'phone': formData.get('phone'),
        };
        addToBuyer(buyer);
        history.push('/checkout/payment');
    };

    return (
        <div className='Information'>
            <div className='Information-content'>
                <div className='Information-head'>
                    <h2>Informacion de contacto:</h2>
                </div>
                <div className='Information-form'>
                    <form ref={form}>
                        <input type='text' placeholder='Nombre' name='name' />
                        <input type='text' placeholder='Correo electronico' name='email' />
                        <input type='text' placeholder='Direccion' name='address' />
                        <input type='text' placeholder='codigo postal' name='postalcode' />
                        <input type='text' placeholder='Ciudad' name='city' />
                        <input type='text' placeholder='Estado' name='state' />
                        <input type='text' placeholder='Pais' name='country' />
                        <input type='text' placeholder='Telefono' name='phone' />
                    </form>
                </div>
                <div className='Information-buttons'>
                    <div className='Information-back'>
                        <Link to='/checkout'>
                            Regresar
                        </Link>
                    </div>
                    <div className='Information-next'>
                        <button type='button' onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className='Information-sidebar'>
                <h3>Pedido:</h3>
                {cart.map((item) => (
                    <div key={item.id} className='Information-item'>
                        <div className='Information-element'>
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Information;
