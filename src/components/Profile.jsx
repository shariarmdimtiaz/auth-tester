import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h3 className="font-bold text-xl py-5">User Profile</h3>
            <div className="flex justify-center p-3 border border-gray-400 rounded-xl">
                <div>
                    <img className='w-28' src={user.photoURL ? user.photoURL : 'https://img.freepik.com/free-icon/user_318-159711.jpg'} alt="" />
                </div>
                <div className="text-left px-4">
                    <p><span className="font-bold">User Name:</span> {user?.displayName}</p>
                    <p><span className="font-bold">Email:</span>  {user.email}</p>
                    <p><span className="font-bold">Email Status:</span>  {user.emailVerified? 'Verified': 'Not verified'}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;