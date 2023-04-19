import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    //console.log("location URL: ",location);
    const from = location.state?.from?.pathname || '/';
    console.log("Next location URL: ", from);

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
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error);
                console.log(error);
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
                console.log(error);
            })
    }
    const handleGithubSignIn = () => {
        setError("");
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                setError(error);
                console.log(error);
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
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex relative">
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={show ? "text" : "password"} name="password"
                                        placeholder="password" className="input input-bordered" required />
                                    <p onClick={() => setShow(!show)} className='text-left absolute top-3 right-12'><small>
                                        {
                                            show
                                                ? <span><EyeSlashIcon className="h-6 w-6 text-blue-700" /></span>
                                                : <span><EyeIcon className="h-6 w-6 text-blue-700" /></span>
                                        }
                                    </small></p>
                                </div>
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
                                <button
                                    onClick={handleGithubSignIn}
                                    className="btn btn-accent">Login with Github</button>
                            </div>
                            <div className="form-control mt-3">
                                <Link to="/phoneverify">
                                    <button
                                        className="btn btn-warning">Login with Phone Verify</button>
                                </Link>
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