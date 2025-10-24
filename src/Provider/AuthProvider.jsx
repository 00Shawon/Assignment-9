import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


const provider = new GoogleAuthProvider();

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  // email-password sign in

  const createUser = (email, password) => {
    setLoading[true]
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) =>{
    setLoading[true]
    return signInWithEmailAndPassword(auth, email, password)
  }

  //sign in with google

  const signinGoogle  = () => {
    setLoading[true]
    return signInWithPopup(auth, provider);
  };

//reset password

const resetPassword = (email) => {
  setLoading(true)
return sendPasswordResetEmail(auth, email);
}

// update profile

const updateUser = (updateData) =>{
  return updateProfile(auth.currentUser, updateData);
}



  const logOut = () =>{
    setLoading[true]
    return signOut(auth);
  }

 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    // console.log(currentUser)
    setUser(currentUser)
    setLoading[false]
  })
  return()=> unsubscribe();
 },[])
  




  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    signinGoogle,
    logOut,
    resetPassword,
    updateUser,
    loading
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
