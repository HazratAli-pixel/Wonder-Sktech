
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../config/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();
const facebookprovider = new FacebookAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setloading] = useState(true);


    const createUser = (email, password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(true);
        return signOut(auth);
    }

    const signinWithGoogle = () => {
        setloading(true);
        return signInWithPopup (auth, googleprovider)
    }
    const signinWithGithub = () => {
        setloading(true);
        return signInWithPopup (auth, githubprovider)
    }
    const signinWithFacebook = () => {
        setloading(true);
        return signInWithPopup (auth, facebookprovider)
    }

    const updateProfileInfo = (info) =>{
        setloading(true);
        updateProfile(auth.currentUser, info)
    }

    const emailverify = () =>{
        return sendEmailVerification(auth.currentUser);
    }


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setloading(false);
        })

        return () =>{
            unsubscribe();
        }

    },[])
    // const authInfo = {user, loading, createUser, signIn, logout, signinWithGoogle}
    const authInfo = {user, loading, createUser,emailverify, signIn, logout, signinWithGoogle,signinWithGithub,signinWithFacebook, updateProfileInfo}

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;