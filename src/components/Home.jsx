import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Home Page</h1>
            {user&& <h1>Welcome, <span className='font-extrabold'>{user?.displayName}</span></h1>}
        </div>
    );
};

export default Home;