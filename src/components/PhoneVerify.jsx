import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const PhoneVerify = () => {
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.start(".otp-container", {
            signInOptions: [
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
        });

    });
    return (
        <div className="otp-container">

        </div>
    );
};

export default PhoneVerify;