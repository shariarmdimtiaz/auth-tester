import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    return (
        <div>
            <h1>This is Orders page.</h1>
            <Link to="/checkout">
                <button className='btn btn-primary mt-5'>Checkout</button>
            </Link>
        </div>
    );
};

export default Orders;