import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Link } from 'react-router-dom';

const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [control, setControl] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        setError("");

        // const form = event.target;
        // const name = form.name.value;
        // const email = form.email.value;
        // const password = form.password.value;

        //  Regular expression for javascript validation
        // (/^                     // start
        // (?=.*\d)                //should contain at least one digit
        // (?=.*[a-z])             //should contain at least one lower case
        // (?=.*[A-Z])             //should contain at least one upper case
        // [a-zA-Z0-9]{8,}         //should contain at least 8 from the mentioned characters
        // $/)                     // end
        // Example:-   /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/


        console.log(email, password);
        if (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,10}$/.test(password)) {            
            //console.log("okay tikh ace ");
        } else {
            setError("The password you entered isn't correct!");
            return;
        }
        if (email) {
            createUser(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    form.reset();
                })
                .catch(error => {
                    //console.log(error)
                    console.log(">>>> ",error.message)
                })
        } else {
            setError("The email and password you’ve entered is not correct.");
        }

    }


    return (
        <div>
            <form action="">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="text" name='name' placeholder="Full name"
                                    className="input input-bordered" />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text" name='email' placeholder="email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" name='password' placeholder="password"
                                    className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button
                                    onClick={handleRegister}
                                    className="btn btn-primary">Register</button>

                                <p className="text-red-600 py-2">{error}</p>
                            </div>
                            <p className="p-2">
                                <small className="text-center font-normal text-base">
                                    Already have an account? 
                                    <Link to="/login" className="text-center font-normal text-base link link-hover"> Login </Link>
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

export default Register;