
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
    const [modeToogle, setModeToogle] = useState(true);
    const [theme, setTheme] = useState("dark");


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

    const modechange = () =>{
        if(!modeToogle){
          setTheme('dark');
          setModeToogle(true)
          document.body.setAttribute("data-theme", theme);
        }
        else{
          setModeToogle(false)
          setTheme('light');
          document.body.setAttribute("data-theme", theme);
        }
        console.log(theme);
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
    const authInfo = {user, loading, createUser,emailverify, signIn, logout, signinWithGoogle,signinWithGithub,signinWithFacebook, updateProfileInfo, modechange, modeToogle}

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;