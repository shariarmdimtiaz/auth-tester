import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        setError("");

        // const form = event.target;
        // setEmail(form.email.value);
        // setPassword(form.password.value);
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                setError(error);
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        setError("");
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            setError(error);
            console.log(error)
        })
    }


    return (
        <div>
            <form action="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" name='email' placeholder="email" 
                                className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                onChange={(e) => setPassword(e.target.value)}                        
                                type="password" name="password" 
                                placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <p className="text-red-600 py-2">{error}</p>
                            </div>
                            <div className="form-control mt-3">
                                <button 
                                onClick={handleLogin}
                                className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-3">
                                <button 
                                onClick={handleGoogleSignIn}
                                className="btn btn-secondary">
                                        Login with Google
                                </button>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-accent">Login with Github</button>
                            </div>
                            <p className="p-2">
                                <small className="text-center font-normal text-base">
                                    Are you new? 
                                    <Link to="/register" className="text-center font-normal text-base link link-hover"> Register </Link>
                                    here. 
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <img
                            className="w-100"
                            src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
                            alt=""
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;