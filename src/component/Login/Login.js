import React, { useState, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import "./Login.css";
import google from "../../images/google.png";
import { VolunteerContext } from '../../App';


const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
    })

    const [loggedInUser, setLoggedInUser] = useContext(VolunteerContext);
      let history = useHistory();
      let location = useLocation();
      let { from } = location.state || { from: { pathname: "/" } };
    
      if (firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const singedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(singedInUser);
                setLoggedInUser(singedInUser);
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    photo: '',
                    email: '',
                    password: '',
                    error: '',
                    success: false
                }
                setUser(signedOutUser);
            })
            .catch(err => {
            })
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-2"></div>
                <div class="col-12 col-lg-8 " style={{ textAlign: 'center' }}>
                    <div className='login-form'>
                    <h1>Login with</h1>
                        {
                            user.isSignedIn ? <button onClick={handleSignOut}>Sign out from google</button> :
                                <button className='googleButton' onClick={handleGoogleSignIn}>
                                    <img src={google} style={{ width: "10%"}} alt="" />
                                    <span style={{ paddingLeft: "10px"}}>Continue with Google</span>
                                </button>
                        }
                    </div>   
                </div>
                <div class="col-12 col-lg-2"></div>
            </div>
        </div>
    );
}

export default Login;
