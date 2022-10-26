
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { createContext } from 'react';
import { useState } from "react";
import { useEffect } from "react";


export const authContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubLoginProvider = new GithubAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
//create new user..........
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //uaer login 
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login with popup
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    //Github login with popup
    const GithubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubLoginProvider)
    }

    //update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //User login
    const logOut = ()=>{
        return signOut(auth)
    }

    //state change when user change on track
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    } , [])
    

    const authInfo = 
    {   user, 
        createUser, 
        login, 
        googleLogin,
        updateUserProfile, 
        GithubLogin, 
        logOut 
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;