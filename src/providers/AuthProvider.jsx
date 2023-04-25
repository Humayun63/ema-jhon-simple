import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const Auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);

    const signUp = (email, password) =>{
        setLoader(true)                        
        return createUserWithEmailAndPassword(Auth, email, password);
    }
    const withGoogle = () =>{
        setLoader(true)
       return signInWithPopup(Auth, googleProvider)
        
    }

    const signIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(Auth, email, password);
    }
    const logOut = () =>{
        return signOut(Auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(Auth, currentUser =>{
            setUser(currentUser)
            setLoader(false)
        });

        return ()=>{
            return unsubscribe
        }
    }, [])

    const contextInfo = {
        user,
        setUser,
        signUp,
        withGoogle,
        signIn,
        logOut,
        loader

    }

    return <>
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    </>

};

export default AuthProvider;