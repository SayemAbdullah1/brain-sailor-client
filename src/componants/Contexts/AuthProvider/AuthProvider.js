
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { createContext } from 'react';
import { useState } from "react";
import { useEffect } from "react";


export const authContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const githubLoginProvider = new GithubAuthProvider()

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const GithubLogin = ()=>{
        return signInWithPopup(auth, githubLoginProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    } , [])

    const authInfo = { user, createUser, login, googleLogin, GithubLogin }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;