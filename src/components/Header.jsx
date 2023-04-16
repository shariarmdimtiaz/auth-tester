import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Auth Tester</a>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                {
                    user && (
                        <Link className="btn btn-ghost normal-case text-xl" to="/shopping">Shopping</Link>
                    )
                }
                {
                    user && <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                }                
                {
                    user ? <></> : (<Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>)
                }
                <div className="flex-none">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user? <img src={user.photoURL} /> :
                                    <img src="https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg" />
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            
                                {/* <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a> */}

                                {
                                    user && <li><Link
                                        className="justify-between"
                                        to="/profile"
                                    >Profile</Link>
                                    </li>
                                }
                            
                            {user && <li><a>Settings</a></li>}
                            {
                            user 
                            ?  <li><button onClick={handleLogOut} className="btn btn-warning">Logout</button></li> 
                            : <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;